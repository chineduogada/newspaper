import { Box } from "@chakra-ui/layout";
import NextImage from "next/image";

export const Image = ({
  alt,
  src,
  quality,
  layout = "fill",
  w,
  h,
  objectFit = "cover",
  objectPosition = "center",
  dropShadow,
  isProduct,
  ...rest
}) => {
  return (
    <Box
      bg="brand.gray6"
      pos="relative"
      overflow="hidden"
      flexShrink={0}
      w={w}
      h={h}
      {...rest}
    >
      <NextImage
        src={src}
        alt={alt || src}
        quality={quality}
        layout={layout}
        objectFit={isProduct ? "contain" : objectFit}
        objectPosition={isProduct ? "center" : objectPosition}
        className={`next-image${dropShadow ? "--drop-shadow" : ""}`}
      />
    </Box>
  );
};

// export const Avatar = ({ lg, md, ...rest }) => {
//   const src = "/img/avatar.png";

//   const getSize = lg
//     ? {
//         w: "120px",
//         h: "120px",
//         quality: 100,
//         border: "5px solid",
//       }
//     : md
//     ? {
//         w: "95px",
//         h: "95px",
//         quality: 75,
//         border: "4px solid",
//       }
//     : // sm
//       {
//         w: "30px",
//         h: "30px",
//         quality: 30,
//         border: "1px solid",
//       };

//   return <Image rounded="full" src={src} {...getSize} {...rest} />;
// };
