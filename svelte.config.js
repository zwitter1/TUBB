import adapter from '@sveltejs/adapter-node';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-node is perfect for Docker containers and Node.js environments
		adapter: adapter()
	}
};

export default config;
