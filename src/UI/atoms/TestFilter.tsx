import { useRef } from "react";
import { showOffers, filteredOffers } from "../../features/offers/offersSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

function TestFilter() {
  const data = useAppSelector(showOffers);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const filterOffers = () => {
    dispatch(filteredOffers(inputRef.current?.value));
  };

  return (
    <div>
      <input
        type="text"
        name=""
        className="form-control"
        placeholder="Search offer by name"
        ref={inputRef}
        onChange={filterOffers}
      />
      <div className="TestFilter">
        {data.offers.map((offer: any) => {
          return <p key={offer.id}>{offer.name}</p>;
        })}
      </div>
    </div>
  );
}

export default TestFilter;
