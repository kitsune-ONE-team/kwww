export default function() {
    const build = process.env.ELEVENTY_RUN_MODE === 'build';

    const config = {
        // index: 'index.html',
        api: build ? 'https://den.kitsune.one/api' : 'http://localhost:8000/api',
        use_altcha: true,

        // https://itch.io/docs/api/oauth
        itch_url: 'https://itch.io/user/oauth',
        itch_params: {
            client_id: '76ff64840aab284b65813c9ce2e08a13',
            scope: 'profile:me',
            response_type: 'token',
            // redirect_uri: 'https://kitsune.one/login/itch/index.html',
            redirect_uri: 'https://kitsune.one/login/itch/',
        },
    }
    return config;
}
