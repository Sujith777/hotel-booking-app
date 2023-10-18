const Footer = () => {
  return (
    <div className="w-full p-4 my-2">
      <div className="flex justify-between">
        <ul className="flex flex-col gap-2 text-blue-600 cursor-pointer">
          <li>Countries</li>
          <li>Regions</li>
          <li>Cities</li>
          <li>Districts</li>
          <li>Airports</li>
          <li>Hotels</li>
        </ul>
        <ul className="flex flex-col gap-2 text-blue-600 cursor-pointer">
          <li>Homes</li>
          <li>Villas</li>
          <li>Apartments</li>
          <li>Resorts</li>
          <li>Guest Houses</li>
        </ul>
        <ul className="flex flex-col gap-2 text-blue-600 cursor-pointer">
          <li>Places to Stay</li>
          <li>Reviews</li>
          <li>Articles</li>
          <li>Communities</li>
          <li>Best Deals</li>
        </ul>
        <ul className="flex flex-col gap-2 text-blue-600 cursor-pointer">
          <li>Car Rental</li>
          <li>Flight Finder</li>
          <li>Reservations</li>
          <li>Travel Agents</li>
        </ul>
        <ul className="flex flex-col gap-2 text-blue-600 cursor-pointer">
          <li>Customer Services</li>
          <li>Partner help</li>
          <li>Careers</li>
          <li>Sustainability</li>
          <li>Press Center</li>
          <li>Investor relations</li>
          <li>Terms & conditions</li>
        </ul>
      </div>
      <h3 className="text-lg mt-4 text-gray-400 text-center">
        Copyright &copy;2023 Sujith Praveen Billa
      </h3>
    </div>
  );
};

export default Footer;
