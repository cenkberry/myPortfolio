import "./menu.scss";
import Link from "next/link";
import { headerContext } from "@/context/context";

export default function Links() {
    return (
      <div className="dn lap-db box-lap">
        <div className="menu">
          <ul>
            {
             headerContext.menu.map((link , id) => {
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