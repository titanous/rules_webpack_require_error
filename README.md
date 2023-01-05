All of these fail:

```
bazel build :normal
bazel build :with_dep
bazel build :with_local_dep
bazel build :with_local_webpack
bazel build :with_local_webpack_and_dep
```

The two genres of errors are:

```
$ bazel build :with_local_webpack
INFO: Analyzed target //:with_local_webpack (0 packages loaded, 0 targets configured).
INFO: Found 1 target...
ERROR: /workspaces/rules_webpack_require_error/BUILD.bazel:40:15: Running Webpack [Webpack] failed: (Exit 2): webpack.sh failed: error executing command (from target //:with_local_webpack) bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh -c with_local_webpack.webpack.config.js -c webpack.config.js --merge --devtool eval --mode development --output-path ''

Use --sandbox_debug to see verbose messages from the sandbox and retain the sandbox build root for debugging
[webpack-cli] Failed to load '/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1200/execroot/__main__/bazel-out/k8-fastbuild/bin/webpack.config.js' config
[webpack-cli] Error: Cannot find module 'webpack'
Require stack:
- /home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1200/execroot/__main__/bazel-out/k8-fastbuild/bin/webpack.config.js
- /home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1200/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/webpack-cli@4.10.0_uaydpeuxkjjcxdbyfgk36cjdxi/node_modules/webpack-cli/lib/webpack-cli.js
- /home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1200/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/webpack-cli@4.10.0_uaydpeuxkjjcxdbyfgk36cjdxi/node_modules/webpack-cli/lib/bootstrap.js
- /home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1200/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/webpack-cli@4.10.0_uaydpeuxkjjcxdbyfgk36cjdxi/node_modules/webpack-cli/bin/cli.js
- /home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1200/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/webpack@5.75.0_webpack-cli@4.10.0/node_modules/webpack/bin/webpack.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:995:15)
    at Function.Module._load (node:internal/modules/cjs/loader:841:27)
    at Module.require (node:internal/modules/cjs/loader:1067:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.<anonymous> (/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1200/execroot/__main__/bazel-out/k8-fastbuild/bin/webpack.config.js:1:36)
    at Module._compile (node:internal/modules/cjs/loader:1165:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1219:10)
    at Module.load (node:internal/modules/cjs/loader:1043:32)
    at Function.Module._load (node:internal/modules/cjs/loader:878:12)
    at Module.require (node:internal/modules/cjs/loader:1067:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1200/execroot/__main__/bazel-out/k8-fastbuild/bin/webpack.config.js',
    '/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1200/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/webpack-cli@4.10.0_uaydpeuxkjjcxdbyfgk36cjdxi/node_modules/webpack-cli/lib/webpack-cli.js',
    '/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1200/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/webpack-cli@4.10.0_uaydpeuxkjjcxdbyfgk36cjdxi/node_modules/webpack-cli/lib/bootstrap.js',
    '/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1200/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/webpack-cli@4.10.0_uaydpeuxkjjcxdbyfgk36cjdxi/node_modules/webpack-cli/bin/cli.js',
    '/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1200/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/webpack@5.75.0_webpack-cli@4.10.0/node_modules/webpack/bin/webpack.js'
  ]
}
Target //:with_local_webpack failed to build
Use --verbose_failures to see the command lines of failed build steps.
INFO: Elapsed time: 6.106s, Critical Path: 1.50s
INFO: 752 processes: 457 internal, 295 local.
FAILED: Build did NOT complete successfully
```

```
$ bazel build :with_local_webpack_and_dep
INFO: Analyzed target //:with_local_webpack_and_dep (0 packages loaded, 0 targets configured).
INFO: Found 1 target...
ERROR: /workspaces/rules_webpack_require_error/BUILD.bazel:47:15: Running Webpack [Webpack] failed: (Exit 2): webpack.sh failed: error executing command (from target //:with_local_webpack_and_dep) bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh -c with_local_webpack_and_dep.webpack.config.js -c webpack.config.js --merge --devtool eval --mode development --output-path ''

Use --sandbox_debug to see verbose messages from the sandbox and retain the sandbox build root for debugging
[webpack-cli] TypeError: The 'compilation' argument must be an instance of Compilation
    at Function.getCompilationHooks (/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1201/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/webpack@5.75.0_webpack-cli@4.10.0/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:143:10)
    at SourceMapDevToolModuleOptionsPlugin.apply (/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1201/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/webpack@5.75.0_webpack-cli@4.10.0/node_modules/webpack/lib/SourceMapDevToolModuleOptionsPlugin.js:50:27)
    at /home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1201/execroot/__main__/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/webpack@5.75.0_webpack-cli@4.10.0/node_modules/webpack/lib/SourceMapDevToolPlugin.js:163:53
    at Hook.eval [as call] (eval at create (/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1201/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/tapable@2.2.1/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:100:1)
    at Hook.CALL_DELEGATE [as _call] (/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1201/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/tapable@2.2.1/node_modules/tapable/lib/Hook.js:14:14)
    at Compiler.newCompilation (/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1201/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/webpack@5.75.0_webpack-cli@4.10.0/node_modules/webpack/lib/Compiler.js:1122:26)
    at /home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1201/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/webpack@5.75.0_webpack-cli@4.10.0/node_modules/webpack/lib/Compiler.js:1166:29
    at Hook.eval [as callAsync] (eval at create (/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1201/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/tapable@2.2.1/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1201/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/tapable@2.2.1/node_modules/tapable/lib/Hook.js:18:14)
    at Compiler.compile (/home/codespace/.cache/bazel/_bazel_codespace/93e2d0ad8f9df2e333d00e6bccc65771/sandbox/linux-sandbox/1201/execroot/__main__/bazel-out/k8-opt-exec-2B5CBBC6/bin/webpack.sh.runfiles/__main__/node_modules/.aspect_rules_js/webpack@5.75.0_webpack-cli@4.10.0/node_modules/webpack/lib/Compiler.js:1161:28)
Target //:with_local_webpack_and_dep failed to build
Use --verbose_failures to see the command lines of failed build steps.
INFO: Elapsed time: 2.862s, Critical Path: 2.22s
INFO: 3 processes: 3 internal.
FAILED: Build did NOT complete successfully
```