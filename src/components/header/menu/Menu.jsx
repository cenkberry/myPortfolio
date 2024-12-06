import "./menu.scss";
import Link from "next/link";
import { menuLinks } from "@/context/context";

export default function Links() {
    return (
      <div className="dn lap-db box-lap">
        <div className="menu">
          <ul>
            {
             menuLinks?.map((link , id) => {
               return(
                <li key={id}>
                  <Link href={link.url} className="b2m">{link.name}</Link>
                </li>
               )
              })
            }
          </ul>
        </div>
      </div>
    );
}