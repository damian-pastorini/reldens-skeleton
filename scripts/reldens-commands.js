/**
 *
 * Reldens - Commands
 *
 */

const fs = require('fs');
const path = require('path');
const Parcel = require('parcel-bundler');

class ReldensCommands
{
    scriptPath = __dirname;
    projectPath = path.join(this.scriptPath, '../');
    reldensModulePath = path.join(this.projectPath, 'node_modules', 'reldens');
    reldensModuleThemePath = path.join(this.reldensModulePath, 'theme');
    reldensDefaultThemeName = 'default';
    reldensModuleDefaultThemePath = path.join(this.reldensModuleThemePath, this.reldensDefaultThemeName);
    reldensAssetsName = 'assets';
    reldensModuleDefaultThemeAssetsPath = path.join(this.reldensModuleDefaultThemePath, this.reldensAssetsName);
    reldensModuleThemePackagesPath = path.join(this.reldensModuleThemePath, 'packages');
    distName = 'dist';
    distPath = path.join(this.projectPath, this.distName);
    assetsDistPath = path.join(this.distPath, this.reldensAssetsName);
    themeName = 'theme';
    themePath = path.join(this.projectPath, this.themeName);
    projectThemeName = this.reldensDefaultThemeName;
    projectThemePath = path.join(this.themePath, this.projectThemeName);
    projectPackagesName = 'packages';
    projectPackagesPath = path.join(this.themePath, this.projectPackagesName);
    projectAssetsPath = path.join(this.projectThemePath, this.reldensAssetsName);

    command = '';
    ready = false;

    constructor()
    {
        console.info('- Reldens - ');
        console.info('- Use "help" as argument to see all the available commands:');
        console.info('$ node scripts/reldens-commands.js help');
        try {
            fs.opendirSync(this.projectPath);
        } catch (error) {
            console.error('- Can not access parent folder, check permissions.');
        }
        try {
            fs.opendirSync(this.reldensModulePath);
        } catch (error) {
            console.error('- Module folder not found, try `npm install`.');
        }
        let parseResult = this.parseArgs();
        if(!parseResult){
            return false;
        }
        this.ready = true;
        if(this.reldensDefaultThemeName !== this.projectThemeName){
            this.projectThemePath = path.join(this.themePath, this.projectThemeName);
            this.projectAssetsPath = path.join(this.projectThemePath, this.reldensAssetsName);
        }
        console.info('- Command "'+this.command+'" ready to be executed.');
        console.info('- Theme: '+this.projectThemeName);
    }

    parseArgs()
    {
        let args = process.argv;
        if(2 === args.length){
            console.error('- Missing arguments.');
            return false;
        }
        let extractedParams = args.slice(2);
        this.command = extractedParams[0];
        if('execute' === this.command || 'function' !== typeof this[this.command]){
            console.error('- Invalid command:', this.command);
            return false;
        }
        if(2 === extractedParams.length && '' !== extractedParams[1]){
            this.projectThemeName = extractedParams[1];
        }
        return true;
    }

    async execute()
    {
        await this[this.command]();
        console.info('- Command executed!');
        process.exit();
    }

    test()
    {
        let crudTestPath = path.join(this.projectPath, 'crud-test');
        fs.mkdirSync(crudTestPath, {recursive: true});
        fs.rmdirSync(crudTestPath);
        console.info('- Test OK.');
    }

    help()
    {
        console.info(' - Available commands:'
            +"\n"+'resetDist               - Delete and create the "dist" folder.'
            +"\n"+'removeDist              - Delete the "dist" folder.'
            +"\n"+'installDefaultTheme     - Copy theme and packages from node_modules into the current project theme.'
            +"\n"+'copyAssetsToDist        - Copy project theme assets into the "dist" folder.'
            +"\n"+'copyKnexFile            - Copy the knexfile.js sample into the project.'
            +"\n"+'copyEnvFile             - Copy the .env file sample into the project.'
            +"\n"+'copyIndex               - Copy the index file sample into the project.'
            +"\n"+'copyDefaultAssets       - Copy the reldens module default assets into the "dist/assets" folder.'
            +"\n"+'copyDefaultTheme        - Copy the reldens module default theme into the project theme.'
            +"\n"+'copyCustomAssets        - Copy the project assets into the "dist/assets" folder.'
            +"\n"+'copyPackage             - Copy the reldens module packages into the project.'
            +"\n"+'buildCss                - Builds the project theme styles.'
            +"\n"+'buildClient             - Builds the project theme index.html.'
            +"\n"+'buildSkeleton           - Builds the styles and project theme index.html.'
            +"\n"+'copyNew                 - Copy all default files for the fullRebuild.'
            +"\n"+'fullRebuild             - Rebuild the Skeleton from scratch.'
            +"\n"+'installSkeleton         - Installs Skeleton.'
            +"\n"+'copyServerFiles         - Reset the "dist" folder and runs a fullRebuild.');
    }

    resetDist()
    {
        this.removeDist();
        fs.mkdirSync(this.distPath, {recursive: true});
        fs.mkdirSync(this.assetsDistPath, {recursive: true});
    }

    removeDist()
    {
        if(fs.existsSync(this.distPath)){
            fs.rmdirSync(this.distPath, {recursive: true});
        }
    }

    installDefaultTheme()
    {
        this.copyFolderSync(this.reldensModuleDefaultThemePath, this.projectThemePath);
        this.copyFolderSync(this.reldensModuleThemePackagesPath, this.projectPackagesPath);
        this.copyFolderSync(this.reldensModuleDefaultThemePath, this.distPath);
    }

    copyAssetsToDist()
    {
        this.copyFolderSync(this.projectAssetsPath, this.assetsDistPath);
    }

    copyFolderSync(from, to)
    {
        fs.mkdirSync(to, {recursive: true});
        fs.readdirSync(from).forEach(element => {
            if(fs.lstatSync(path.join(from, element)).isFile()){
                fs.copyFileSync(path.join(from, element), path.join(to, element));
            } else {
                this.copyFolderSync(path.join(from, element), path.join(to, element));
            }
        });
    }

    copyKnexFile()
    {
        fs.copyFileSync(
            path.join(this.reldensModulePath, 'knexfile.js.sample'),
            path.join(this.projectPath, 'knexfile.js')
        );
        console.warn('- Reminder: edit the knexfile.js file!');
    }

    copyEnvFile()
    {
        fs.copyFileSync(
            path.join(this.reldensModulePath, 'sample.env'),
            path.join(this.projectPath, '.env')
        );
        console.warn('- Reminder: edit the .env file!');
    }

    copyIndex()
    {
        fs.copyFileSync(
            path.join(this.reldensModuleThemePath, 'project-index.js.sample'),
            path.join(this.projectPath, 'index.js')
        );
    }

    copyDefaultAssets()
    {
        this.copyFolderSync(this.reldensModuleDefaultThemeAssetsPath, this.assetsDistPath);
    }

    copyDefaultTheme()
    {
        this.copyFolderSync(this.reldensModuleDefaultThemePath, this.projectThemePath);
    }

    copyCustomAssets()
    {
        this.copyFolderSync(this.projectAssetsPath, this.assetsDistPath);
    }

    copyPackage()
    {
        this.copyFolderSync(this.reldensModuleThemePackagesPath, this.projectPackagesPath);
    }

    async buildCss()
    {
        let bundler = new Parcel(
            path.join(this.projectThemePath, 'css', 'styles.scss'),
            {production: true, sourceMaps: false, publicUrl: './', outDir: path.join(this.projectThemePath, 'css')}
        );
        await bundler.bundle();
    }

    async buildSkeleton()
    {
        await this.buildCss();
        await this.buildClient();
    }

    async buildClient()
    {
        let bundler = new Parcel(
            path.join(this.projectThemePath, 'index.html'),
            {production: true, sourceMaps: false, outDir: path.join(this.distPath)}
        );
        await bundler.bundle();
    }

    copyNew()
    {
        this.copyDefaultAssets();
        this.copyDefaultTheme();
        this.copyPackage();
    }

    async fullRebuild()
    {
        this.copyNew();
        await this.buildSkeleton();
    }

    async installSkeleton()
    {
        this.copyServerFiles();
        this.resetDist();
        await this.fullRebuild();
    }

    copyServerFiles()
    {
        this.copyEnvFile();
        this.copyKnexFile();
        this.copyIndex();
    }

}

let command = new ReldensCommands();

if(command.ready){
    command.execute().then(() => {
        console.info('- End');
    });
}
