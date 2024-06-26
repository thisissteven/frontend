import Head from "next/head";
import { usePathname } from "next/navigation";

const defaultMeta = {
  title: "Sistem Penerbitan Sertifikat Tanah",
  siteName: "sisdis-capstone-sertifikat-tanah.vercel.app",
  description:
    "Sistem Penerbitan Sertifikat Tanah adalah sebuah sistem yang memungkinkan pengguna untuk melakukan penerbitan sertifikat tanah via sistem berbasis blockchain.",
  url: "https://sisdis-capstone-sertifikat-tanah.vercel.app",
  image: "",
  type: "website",
  robots: "follow, index",
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  isBlog?: boolean;
  banner?: string;
  canonical?: string;
  tags?: string;
} & Partial<typeof defaultMeta>;

export function Seo(props: SeoProps) {
  const asPath = usePathname();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta["title"] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${asPath}`} />
      <link rel="canonical" href={meta.canonical ? meta.canonical : `${meta.url}${asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="Posts" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}

      <meta name="theme-color" content="#222" />
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "/favicon/apple-icon-57x57.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/favicon/apple-icon-60x60.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/favicon/apple-icon-72x72.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/favicon/apple-icon-76x76.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/favicon/apple-icon-114x114.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/favicon/apple-icon-120x120.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/favicon/apple-icon-144x144.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/favicon/apple-icon-152x152.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-icon-180x180.png",
  },
  {
    rel: "icon",
    type: "image/x-icon",
    sizes: "16x16",
    href: "/favicon.ico",
  },
  {
    rel: "manifest",
    href: "/favicon/manifest.json",
  },
];
