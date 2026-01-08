import { useHomePageContext } from "../../contexts/homeContext";
import PageBase, { Section } from "../PageBase";
import Highlights from "./Highlights";
import HomePageHeader from "./HomePageHeader";

export default function Home() {
  const content = useHomePageContext();

  return (
    <PageBase content={content} headerElement={HomePageHeader}>
      <Section id="highlights" title="Highlights">
        <Highlights listData={content.highlight} />
      </Section>

      <Section id="snapshots" title="Snapshots">
        <ul className="space-y-2">
          {content.snapshot.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Section>

      <Section id="bio" title="About me" headingClassName="sr-only">
        <p>{content.bio}</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae
        maiores velit nemo hic, tenetur omnis exercitationem voluptates fugit
        pariatur excepturi ipsum incidunt eos magnam non quasi et culpa neque!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
        deleniti magni cumque perspiciatis sint accusamus voluptas, ipsa
        voluptatum atque nihil ipsum nam tenetur eaque esse modi eligendi omnis!
        Explicabo, sit! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Tempora amet, ratione eligendi in ad repellendus itaque possimus
        fugiat adipisci? Veritatis error ratione et dolorem nostrum neque ipsam
        commodi cumque alias. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Repellendus blanditiis, inventore facilis at expedita id earum,
        harum totam eos nostrum animi fuga sint? Consequatur explicabo maxime
        ullam quam possimus cumque! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolorum beatae maiores velit nemo hic, tenetur omnis
        exercitationem voluptates fugit pariatur excepturi ipsum incidunt eos
        magnam non quasi et culpa neque! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Beatae deleniti magni cumque perspiciatis sint
        accusamus voluptas, ipsa voluptatum atque nihil ipsum nam tenetur eaque
        esse modi eligendi omnis! Explicabo, sit! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Tempora amet, ratione eligendi in ad
        repellendus itaque possimus fugiat adipisci? Veritatis error ratione et
        dolorem nostrum neque ipsam commodi cumque alias. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Repellendus blanditiis, inventore
        facilis at expedita id earum, harum totam eos nostrum animi fuga sint?
        Consequatur explicabo maxime ullam quam possimus cumque!Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dolorum beatae maiores
        velit nemo hic, tenetur omnis exercitationem voluptates fugit pariatur
        excepturi ipsum incidunt eos magnam non quasi et culpa neque! Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Beatae deleniti
        magni cumque perspiciatis sint accusamus voluptas, ipsa voluptatum atque
        nihil ipsum nam tenetur eaque esse modi eligendi omnis! Explicabo, sit!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora amet,
        ratione eligendi in ad repellendus itaque possimus fugiat adipisci?
        Veritatis error ratione et dolorem nostrum neque ipsam commodi cumque
        alias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Repellendus blanditiis, inventore facilis at expedita id earum, harum
        totam eos nostrum animi fuga sint? Consequatur explicabo maxime ullam
        quam possimus cumque!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dolorum beatae maiores velit nemo hic, tenetur omnis
        exercitationem voluptates fugit pariatur excepturi ipsum incidunt eos
        magnam non quasi et culpa neque! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Beatae deleniti magni cumque perspiciatis sint
        accusamus voluptas, ipsa voluptatum atque nihil ipsum nam tenetur eaque
        esse modi eligendi omnis! Explicabo, sit! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Tempora amet, ratione eligendi in ad
        repellendus itaque possimus fugiat adipisci? Veritatis error ratione et
        dolorem nostrum neque ipsam commodi cumque alias. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Repellendus blanditiis, inventore
        facilis at expedita id earum, harum totam eos nostrum animi fuga sint?
        Consequatur explicabo maxime ullam quam possimus cumque!
      </Section>
    </PageBase>
  );
}
