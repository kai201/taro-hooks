export default {
  pages: [
    // layout
    'pages/index/index',
    'pages/panel/index',
    // env
    'pages/useEnv/index',
    // basic
    'pages/useBase64ToArrayBuffer/index',
    'pages/useArrayBufferToBase64/index',
    'pages/useSystemInfo/index',
    'pages/useEvent/index',
    'pages/useVisible/index',
    // wechat
    'pages/useAPICheck/index',
    'pages/useUpdateManager/index',
    // network
    'pages/useRequest/index',
    'pages/useRequest/defaultRequest/index',
    'pages/useRequest/manual/index',
    'pages/useRequest/polling/index',
    'pages/useRequest/concurrent/index',
    'pages/useRequest/ready/index',
    'pages/useRequest/debounce/index',
    'pages/useRequest/throttle/index',
    'pages/useRequest/cacheKey/index',
    'pages/useRequest/preload/index',
    'pages/useRequest/refreshOnWindowFocus/index',
    'pages/useRequest/mutate/index',
    'pages/useRequest/loadingDelay/index',
    'pages/useRequest/refreshDeps/index',
    'pages/useRequest/fetch/index',
    'pages/useRequest/axios/index',
    'pages/useRequest/pagination/index',
    'pages/useRequest/paginationCache/index',
    'pages/useRequest/loadMore/index',
    'pages/useNetworkType/index',
    'pages/useOnline/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    backgroundColor: '#f8f8f8',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro hooks',
    navigationBarTextStyle: 'black',
  },
};
