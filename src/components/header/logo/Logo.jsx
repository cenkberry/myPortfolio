import "./logo.scss";
import { headerContext } from "@/context/context";

export default function Logo() {
  return (
    <div className="box-auto box-lap-auto">
      <div className="h3b logo">{headerContext.logo}</div>
    </div>
  );
}
