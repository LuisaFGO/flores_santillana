/**
 * @deprecated process.env usage
 * prefer using meta.env
 * */
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  [key: string]: any;
  readonly NG_APP_LOCAL_HOST: string;
  readonly NG_APP_URL: string;
}
