import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	//mengambil token pada header dan split spasi kemudian ambil value index ke 1
	const token = authHeader && authHeader.split(" ")[1];
	if (!token) return res.sendStatus(401);
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err) return res.sendStatus(403);
		req.email = decoded.email;
		next();
	});
};
