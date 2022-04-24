/*
don't push node_modules to git, you can just install it 
again by using npm install and all the packages in the dependencies will install
we can share code without massive file like node_modules

delete dependencies, npm uninstall lodash, or delete node_module and
package-lock-json then erase the dependencies in package.json before
installing the the node_module


npm - global command, comes with node 
npm --version

local dependency - use it only in this particular project
npm i <packageName>

global dependency - use it in any project
npm install -g <packageName>
sudo install -g <packageName> mac

package.json - manifest file(stores info about project/package)
manual approach(create package.json in the root, create properties etc)
npm init(step by step, press enter to skip) 
npm init -y(everything default)
*/
const _ = require('lodash')

const sample = [2,[3,[4]]]
const num = _.flattenDeep(sample)

console.log(num);