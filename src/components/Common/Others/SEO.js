import Head from "next/head";
import PropsTypes from "prop-types";
import config from "../../../../blog.config";

const SEO = (props) => {
  const title = props.title ? `${config.title} | ${props.title}` : config.title;
  const url = props.url ? `${config.url}${props.url}` : config.url;
  const description = props.description
    ? props.description
    : config.description;

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {props.imageUrl && <meta property="og:image" content={props.imageUrl} />}
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@toptechschool" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {props.imageUrl && <meta name="twitter:image" content={props.imageUrl} />}
    </Head>
  );
};

SEO.propTypes = {
  title: PropsTypes.string,
  description: PropsTypes.string,
  url: PropsTypes.string,
  imageUrl: PropsTypes.string,
  imageAlt: PropsTypes.string,
  twitter: PropsTypes.string,
};

export default SEO;
