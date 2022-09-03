import React from "react";
import styled from "styled-components";
import { EntryTitle } from "./panel/entry-title";
import { EntryMeta } from "./panel/entry-meta";
import { EntryPanel } from "./panel/panel";
import { BasicLayout } from "../../layouts/basicLayout";
import { SharePanel ,ShareMobile  } from "./content/share";
import { RelatedPosts } from "./content/related";

import { FullWidthImage } from "../";

const ContentHolder = styled.div`
  display: grid;
  justify-content: center;
  column-gap: 48px;
  @media (min-width: 992px) {
    grid-template-columns: 96px minmax(0, 690px);
  }
`;
export const Post = () => {
  return (
    <BasicLayout footer>
      <EntryPanel />

      <article>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto py-5">
              <ContentHolder>
                <SharePanel />
                <div className="px-4">
                  <p>
                    Structured gripped tape invisible moulded cups for sauppor
                    firm hold strong powermesh front liner sport detail. Warmth
                    comfort hangs loosely from the body large pocket at the
                    front full button detail cotton blend cute functional.
                    Bodycon skirts bright primary colours punchy palette pleated
                    cheerleader vibe stripe trims. Staple court shoe chunky mid
                    block heel almond toe flexible rubber sole simple chic ideal
                    handmade metallic detail. Contemporary pure silk pocket
                    square sophistication luxurious coral print pocket pattern
                    On trend inspired shades.
                  </p>
                  <p>
                    Striking pewter studded epaulettes silver zips inner
                    drawstring waist channel urban edge single-breasted
                    jacket.&nbsp;Engraved attention to detail elegant with
                    neutral colours cheme quartz leather strap fastens with a
                    pin a buckle clasp. Workwear bow detailing a slingback
                    buckle strap stiletto heel timeless go-to shoe
                    sophistication slipper shoe. Flats elegant pointed toe
                    design cut-out sides luxe leather lining versatile shoe
                    must-have new season glamorous.
                  </p>
                  <blockquote>
                    <p>
                      Knicker lining concealed back zip fasten swing style high
                      waisted double layer full pattern floral.
                    </p>
                    <cite>Timeless clean perfume</cite>
                  </blockquote>
                  <p>
                    Foam padding in the insoles leather finest quality staple
                    flat slip-on design pointed toe off-duty shoe. Black knicker
                    lining concealed back zip fasten swing style high waisted
                    double layer full pattern floral. Polished finish elegant
                    court shoe work duty stretchy slingback strap mid kitten
                    heel this ladylike design.
                  </p>
                  <p>
                    Eget aenean tellus venenatis. Donec odio tempus. Felis
                    arcu&nbsp;
                    <a href="#">
                      pretium metus
                    </a>
                    &nbsp;nullam quam aenean sociis quis sem neque vici libero.
                    Venenatis nullam fringilla pretium magnis aliquam nunc
                    vulputate integer augue ultricies cras. Eget viverra feugiat
                    cras ut. Sit natoque montes tempus ligula eget vitae pede
                    rhoncus maecenas consectetuer commodo condimentum aenean.
                  </p>
                  <h3> Eu ridiculus fringilla aenean</h3>
                  <p>
                    Sociis consequat adipiscing sit curabitur donec sem luctus
                    cras natoque vulputate dolor eget dapibus. Nec vitae eros
                    ullamcorper laoreet dapibus mus ac ante viverra. A aenean
                    sit augue curabitur et parturient nisi sed enim. Nulla nec
                    quis sit quisque sem commodo ultricies neque. Lorem eget
                    venenatis dui ante luctus ultricies tellus montes. Quis in
                    sapien tempus.
                  </p>
                  <ul>
                    <li>Crisp fresh iconic elegant timeless clean perfume</li>
                    <li>Neck straight sharp silhouette and dart detail</li>
                    <li>
                      Machine wash cold slim fit premium stretch selvedge denim
                      comfortable low waist
                    </li>
                  </ul>
                  <p>
                    See-through delicate embroidered organza blue lining luxury
                    acetate-mix stretch pleat detailing. Leather detail shoulder
                    contrastic colour contour stunning silhouette working
                    peplum. Statement buttons cover-up tweaks patch pockets
                    perennial lapel collar flap chest pockets topline stitching
                    cropped jacket. Effortless comfortable full leather lining
                    eye-catching unique detail to the toe low
                    &lsquo;cut-away&rsquo; sides clean and sleek. Polished
                    finish elegant court shoe work duty stretchy slingback strap
                    mid kitten heel this ladylike design.
                  </p>
                </div>
                <ShareMobile />
              </ContentHolder>
            </div>
          </div>
        </div>
      </article>
      <RelatedPosts />
    </BasicLayout>
  );
};
