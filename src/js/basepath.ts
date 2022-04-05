const dev = process.env.NODE_ENV === 'development';
const BASEPATH = (dev || true) ? '/' : '/chords/';

export default BASEPATH;
