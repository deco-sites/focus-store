import Header from "$store/components/ui/SectionHeader.tsx";

export interface Props {
  title?: string;
  fontSize?: "Normal" | "Large";
  description?: string;
  /** @format html */
  paragraph?: string;
  alignment: "center" | "left";
  colorReverse?: boolean;
}

export default function InfoCard(props: Props) {
  return (
    <div class="my-6 container">
      <Header {...props} />
    </div>
  );
}
