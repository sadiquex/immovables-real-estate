import { H2 } from "@/app/_ui/designSystem/textSystem";
import { DetailsTable } from "./singlePropertyStyles";

export default function PropertyDetailsTable({ extraFeatures }) {
  return (
    <div>
      <H2>Property Details</H2>
      <DetailsTable>
        <tbody>
          {extraFeatures?.map((feature, i) => (
            // darken bg colour when it's even or odd
            <tr key={i} className={i % 2 === 0 ? "even" : "odd"}>
              <td>{feature.title}</td>
              <td>{feature.value}</td>
            </tr>
          ))}
        </tbody>
      </DetailsTable>
    </div>
  );
}
