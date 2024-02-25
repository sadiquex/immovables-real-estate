import { Suspense } from "react";
import PageHeader from "../components/PageHeader";
import CatalogProperties from "./CatalogProperties";
import Map from "./Map";
import { CatalogContainer } from "./catalogStyles";
import Loading from "../components/_ui/Loading";

export default function Catalog() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <PageHeader title="Our Catalog" />
        <CatalogContainer>
          {/* classname to make the grid styling work */}
          <div className="catalog">
            <CatalogProperties />
          </div>
          <Map />
        </CatalogContainer>
      </Suspense>
    </>
  );
}
