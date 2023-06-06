import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon from "$store/components/ui/Icon.tsx";
import { useId } from "preact/hooks";
import SliderJS from "$store/islands/SliderJS.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";

export interface Category {
  tag?: string;
  label: string;
  description?: string;
  href?: string;
  image?: LiveImage;
  buttonText?: string;
}

export interface Props {
  header?: {
    title?: string;
    description?: string;
  };
  list?: Category[];
  layout?: {
    headerAlignment?: "center" | "left";
    /** @default normal */
    size: "normal" | "auto";
    categoryCard?: {
      textPosition?: "top" | "bottom";
      textAlignment?: "center" | "left";
    };
  };
}

function CardText(
  { tag, label, description, alignment }: {
    tag?: string;
    label?: string;
    description?: string;
    alignment?: "center" | "left";
  },
) {
  return (
    <div
      class={`flex flex-col ${
        alignment === "center" ? "text-center" : "text-left"
      }`}
    >
      {tag && <div class="text-sm text-primary">{tag}</div>}
      {label && <h3 class="text-xs font-semibold text-base-content">{label}
      </h3>}
      {description && <div class="text-sm text-neutral">{description}</div>}
    </div>
  );
}

function CategoryList(props: Props) {
  const id = `category-list-${useId()}`;
  const {
    header = {
      title: "",
      description: "",
    },
    list = [
      {
        tag: "10% off",
        label: "Feminino",
        description: "Moda feminina direto de Milão",
        href: "/feminino",
        image:
          "https://ik.imagekit.io/decocx/tr:w-680,h-680/https:/ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fdcb3c8f-d629-485e-bf70-8060bd8a9f65",
        buttonText: "Ver produtos",
      },
    ],
    layout = {
      headerAlignment: "center",
      size: "normal",
      categoryCard: {
        textPosition: "top",
        textAlignment: "center",
      },
    },
  } = props;

  return (
    <div
      id={id}
      class="container relative py-8 flex flex-col gap-8 lg:gap-10 text-base-content  lg:py-10"
    >
      <Header
        title={header.title}
        description={header.description || ""}
        alignment={layout.headerAlignment || "center"}
      />
      <div class="absolute w-full top-1/2 left-0">
        <div class="absolute left-0 flex items-center justify-center z-10 col-start-1 row-start-2">
          <Slider.PrevButton class="btn btn-circle">
            <Icon
              class="text-base-100"
              size={20}
              id="ChevronLeft"
              strokeWidth={3}
            />
          </Slider.PrevButton>
        </div>
        <div class="absolute right-0 flex items-center justify-center z-10 col-start-3 row-start-2">
          <Slider.NextButton class="btn btn-circle">
            <Icon
              class="text-base-100"
              size={20}
              id="ChevronRight"
              strokeWidth={3}
            />
          </Slider.NextButton>
        </div>
      </div>
      <Slider class="carousel md:carousel-start carousel-center gap-4 lg:gap-8 row-start-2 row-end-5">
        {list.map((
          { tag, label, description, href, image, buttonText },
          index,
        ) => (
          <Slider.Item
            index={index}
            class="flex flex-col gap-4 carousel-item first:pl-[15%] sm:first:pl-0 last:pr-6 sm:last:pr-0"
          >
            <a
              href={href}
              class="flex flex-col gap-4 items-center w-60"
            >
              {layout.categoryCard?.textPosition === "top" &&
                (
                  <CardText
                    tag={tag}
                    label={label}
                    description={description}
                    alignment={layout?.categoryCard?.textAlignment}
                  />
                )}
              {image &&
                (
                  <figure>
                    <Image
                      class={`card ${
                        layout.size === "auto" ? "" : "w-[72px]"
                      } h-auto`}
                      src={image}
                      alt={description || label || tag}
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                  </figure>
                )}
              {layout.categoryCard?.textPosition === "bottom" &&
                (
                  <CardText
                    tag={tag}
                    label={label}
                    description={description}
                    alignment={layout?.categoryCard?.textAlignment}
                  />
                )}
            </a>
            {buttonText &&
              <a href={href} class="btn">{buttonText}</a>}
          </Slider.Item>
        ))}
      </Slider>

      <SliderJS rootId={id} />
    </div>
  );
}

export default CategoryList;
