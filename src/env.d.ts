/**
 * @deprecated process.env usage
 * prefer using meta.env
 * */
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly NG_APP_ENV: string;

  [key: string]: any;
  readonly NG_APP_LOCAL_HOST: string;
  readonly NG_APP_URL: string;
}

// declare var process: {
//   env: {
//     NG_APP_ENV: string;
//     [key: string]: any;
//     readonly GENERAL: string;
//   };
// };
