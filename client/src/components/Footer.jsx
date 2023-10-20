const Footer = () => {
  return (
    <div className="w-full p-4 my-2">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
        <div className="h-full">
          <ul className="flex flex-col gap-2 justify-between text-blue-600 cursor-pointer">
            <li>Countries</li>
            <li>Regions</li>
            <li>Cities</li>
            <li>Districts</li>
            <li>Airports</li>
            <li>Hotels</li>
          </ul>
        </div>
        <div className="h-full">
          <ul className="flex flex-col justify-between gap-2 text-blue-600 cursor-pointer">
            <li>Homes</li>
            <li>Villas</li>
            <li>Apartments</li>
            <li>Resorts</li>
            <li>Guest Houses</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2 text-blue-600 cursor-pointer">
            <li>Places to Stay</li>
            <li>Reviews</li>
            <li>Articles</li>
            <li>Communities</li>
            <li>Best Deals</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2 text-blue-600 cursor-pointer">
            <li>Car Rental</li>
            <li>Flight Finder</li>
            <li>Reservations</li>
            <li>Travel Agents</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2 text-blue-600 cursor-pointer">
            <li>Partner help</li>
            <li>Careers</li>
            <li>Investor relations</li>
            <li>Terms & conditions</li>
          </ul>
        </div>
      </div>
      <h3 className="text-lg mt-4 text-gray-400 text-center">
        Copyright &copy;2023 Sujith Praveen Billa
      </h3>
    </div>
  );
};

export default Footer;
