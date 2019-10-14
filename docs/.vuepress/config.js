module.exports = {
	base: '/vuepress/',
	title: 'Blog',
	description: 'Step by step.',
	port: 8080,
	dest: 'e:/BlogDeploy/dist',
    themeConfig: {
        sidebarDepth: 2,
        displayAllHeaders: true,
        nav: require("./nav.js"),
		sidebar: require("./sidebar.js"),
        lastUpdated: 'Last Updated', 
    }
}