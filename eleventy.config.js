import crypto from 'crypto';


export default function (eleventyConfig) {
	// Copy `image/` to `_site/image/`
	eleventyConfig.addPassthroughCopy('image');

    // Watch dirs
	// eleventyConfig.addWatchTarget('./');
	// eleventyConfig.addWatchTarget('./k/');
	// eleventyConfig.addWatchTarget('./_includes/');

    // Helper function to convert hex color to rgba
    eleventyConfig.addFilter('rgba', function(hex, alpha = 1) {
        hex = hex.replace(/^#/, '');
        let r, g, b;
        if (hex.length === 6) {
            r = parseInt(hex.substring(0, 2), 16);
            g = parseInt(hex.substring(2, 4), 16);
            b = parseInt(hex.substring(4, 6), 16);
        } else {
            console.warn(`Invalid hex color: ${hex}`);
            return `rgba(0, 0, 0, ${alpha})`;
        }
        alpha = Math.max(0, Math.min(1, parseFloat(alpha)));
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    });

    // Helper filter to convert string to MD5 hash
    eleventyConfig.addFilter('md5', function(str) {
        if (!str || typeof str !== 'string') {
            return '';
        }
        return crypto.createHash('md5').update(str).digest('hex');
    });
};
