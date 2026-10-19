import { Router } from 'express';

const router = Router();
router.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'nexus-auth', maintainer: 'auth8570', timestamp: new Date().toISOString() });
});

export default router;