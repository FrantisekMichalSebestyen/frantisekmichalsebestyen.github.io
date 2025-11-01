"use client";

import { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import Photo from "@/components/Photo";
import Card from "@/components/Card";

// Data: type can be 'photo' or 'card'.
const items = [
  { type: "card", title: "-", paragraph: "Ľúbim Ťa-" },
  { type: "photo", src: "/botanicka/18.JPG" },
  { type: "photo", src: "/botanicka/17.JPG" },
  { type: "photo", src: "/botanicka/16.JPG" },
  { type: "photo", src: "/botanicka/15.JPG" },
  { type: "photo", src: "/botanicka/14.JPG" },
  { type: "photo", src: "/botanicka/13.JPG" },
  { type: "photo", src: "/botanicka/12.JPG" },
  { type: "photo", src: "/botanicka/11.JPG" },
  {
    type: "card",
    title: "Ellen Denk-",
    paragraph:
      "Teším sa že som ťa mohol spoznať-Aj z našich výletov-Je to pre mňa vzácne-",
  },
  { type: "photo", src: "/botanicka/10.JPG" },
  { type: "photo", src: "/botanicka/09.JPG" },
  { type: "photo", src: "/botanicka/08.JPG" },
  { type: "photo", src: "/botanicka/07.JPG" },
  { type: "photo", src: "/botanicka/06.JPG" },
  { type: "photo", src: "/botanicka/05.JPG" },
  {
    type: "card",
    title: "Amorphophallus Obrovský-",
    paragraph:
      "V apríli roku 2018 zasadil botanik Norbert Zlámal semiačko Amorfafalusa Obrovské do botanickej záhrady v Bratislavy-V utorok 6. augusta 2024 sa davy ľudí stali svedkami výnimočného javu – kvetina po prvýkrát rozkvitla na Slovensku-",
  },
  { type: "photo", src: "/botanicka/04.JPG" },
  { type: "photo", src: "/botanicka/03.JPG" },
  { type: "photo", src: "/botanicka/02.JPG" },
  { type: "photo", src: "/botanicka/01.JPG" },
  { type: "photo", src: "/botanicka/00.JPG" },
  { type: "card", title: "Výlet do Botanickej-", paragraph: "-" },
];

const AnimatedPhoto = animated(Photo);
const AnimatedCard = animated(Card);

// Animation helpers
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r: number, s: number) =>
  `perspective(9000px) rotateX(3deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set<number>());
  const [props, api] = useSprings(items.length, (i) => ({
    ...to(i),
    from: from(),
  }));

  const bind = useDrag(
    ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.2;
      if (!active && trigger) gone.add(index);
      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
        const rot = mx / 100 + (isGone ? xDir * 10 * vx : 0);
        const scale = active ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!active && gone.size === items.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    },
  );

  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => {
        const item = items[i];
        return (
          <animated.div
            className="absolute w-full h-full will-change-transform flex items-center justify-center touch-none"
            key={i}
            style={{ x, y }}
          >
            {item.type === "photo" ? (
              <AnimatedPhoto
                {...bind(i)}
                src={item.src as string}
                style={{
                  transform: interpolate([rot, scale], trans),
                }}
              />
            ) : (
              <AnimatedCard
                {...bind(i)}
                title={item.title as string}
                paragraph={item.paragraph as string}
                style={{
                  transform: interpolate([rot, scale], trans),
                }}
              />
            )}
          </animated.div>
        );
      })}
    </>
  );
}

export default function Ellen() {
  return (
    <div className="flex fill relative h-screen items-center justify-center bg-slate-50 overflow-none">
      <Deck />
    </div>
  );
}
