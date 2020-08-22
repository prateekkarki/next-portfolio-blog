import React from "react";
import Link from "next/link";
import {
  Image,
  Placeholder,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";

const Card = ({ article }) => {
  //   const imageUrl =
  //     process.env.NODE_ENV !== "development"
  //       ? article.image.url
  //       : process.env.API_URL + article.image.url;
  return (
    <Link href={{ pathname: "article", query: { id: article.id } }}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <CloudinaryContext cloudName="pratiek">
              <Image
                dpr="auto"
                responsive
                width="auto"
                crop="scale"
                responsiveUseBreakpoints="true"
                publicId={article.image.url.split("/").pop()}
              >
                <Transformation width="200" crop="scale" />
                <Placeholder type="pixelate" />
              </Image>
            </CloudinaryContext>
            {/* <img src={article.image.url} alt={article.image.url} height="100" /> */}
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
