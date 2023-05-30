import proj4 from 'proj4';

interface GPSPoint {
	lon: number;
	lat: number;
}

interface ImagePoint {
	x: number;
	y: number;
}

function convertGPSToImage(gpsPoint: GPSPoint, referencePoints: { gps: GPSPoint; image: ImagePoint }[]): ImagePoint {
	// Define the coordinate system of the GPS points and the map image
	const gpsProjection = proj4('EPSG:4326');
	const imageProjection = proj4('EPSG:3857');

	// Convert reference points to image coordinates
	const refImagePoints = referencePoints.map((refPoint) => {
		const { gps, image } = refPoint;
		const [x, y] = proj4(gpsProjection, imageProjection, [gps.lon, gps.lat]);
		return { x: image.x, y: image.y, gps: gps };
	});

  // Convert GPS point to image coordinates
	const [x, y] = proj4(gpsProjection, imageProjection, [gpsPoint.lon, gpsPoint.lat]);

  // Perform interpolation to calculate the corresponding image coordinates
	const imagePoint = interpolateImagePoint(x, y, refImagePoints);

	return imagePoint;
}

function interpolateImagePoint(x: number, y: number, refImagePoints: { x: number; y: number; gps: GPSPoint }[]): ImagePoint {
  // Find the two nearest reference points
	const nearestPoints = findNearestPoints(x, y, refImagePoints);

  // Perform bilinear interpolation to calculate the corresponding image coordinates
	const { x1, y1, x2, y2, gps1, gps2 } = nearestPoints;
	const weight1: number = calculateWeight(x, y, x1, y1, x2, y2);
	const weight2: number = 1 - weight1;

	const imageX = weight2 * refImagePoints[0].x + weight1 * refImagePoints[1].x;
	const imageY = weight2 * refImagePoints[0].y + weight1 * refImagePoints[1].y;

	return { x: imageX, y: imageY };
}

function findNearestPoints(x: number, y: number, refImagePoints: { x: number; y: number; gps: GPSPoint }[]) {
	let minDist = Number.MAX_VALUE;
	let nearestPoints = {};

	for (let i = 0; i < refImagePoints.length; i++) {
		const { x: x1, y: y1, gps: gps1 } = refImagePoints[i];
		for (let j = i + 1; j < refImagePoints.length; j++) {
			const { x: x2, y: y2, gps: gps2 } = refImagePoints[j];
			const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
			if (dist < minDist) {
				minDist = dist;
				nearestPoints = { x1, y1, x2, y2, gps1, gps2 };
			}
		}
	}

	return nearestPoints;
}

function calculateWeight(x: number, y: number, x1: number, y1: number, x2: number, y2: number) {
  const numerator = (x - x1) * (x2 - x1)
