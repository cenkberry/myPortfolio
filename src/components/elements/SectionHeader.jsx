export default function SectionHeader({ title, subtitle }) {
  if (subtitle) {
    return (
      <div className="section-header">
        <div className="title">
          <div className="tag">{title}</div>
        </div>
        <div className="subtitle sub">{subtitle}</div>
      </div>
    );
  } else {
    return (
      <div className="section-header">
        <div className="title">
          <div className="tag">{title}</div>
        </div>
      </div>
    );
  }
}
