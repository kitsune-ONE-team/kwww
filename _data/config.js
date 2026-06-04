export default function() {
    const build = process.env.ELEVENTY_RUN_MODE === 'build';

    const config = {
        index: 'index.html',
        api: build ? 'https://den.kitsune.one/api' : 'http://localhost:8000/api',
        use_altcha: true,
    }
    return config;
}
