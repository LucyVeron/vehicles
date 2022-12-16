import Cars from "../../UI/organisms/Cars";
import "./Listing.scss";
import { useAppSelector } from "../../utils/hooks";
import { showOffers } from "../../features/offers/offersSlice";
import Filters from "../../UI/organisms/Filters";

function Listing() {
  const data = useAppSelector(showOffers);

  return (
    <div className="Listing">
      <Filters />
      <div>
        {data.filteredOffers.map((offer: any) => {
          return (
            <div key={offer.id}>
              <strong>{offer.name}</strong>
              <div>{offer.company.name}</div>
            </div>
          );
        })}
      </div>
      <Cars />
    </div>
  );
}

export default Listing;
