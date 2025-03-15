import Link from "next/link";

const FooterRouteList = ({ list }) => {
  return (
    <div className="capitalize">
      <p className="font-semibold mb-2 uppercase">{list?.title}</p>
      <ul className="text-gray-500">
        {list?.items?.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item?.path}>{item?.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterRouteList;
