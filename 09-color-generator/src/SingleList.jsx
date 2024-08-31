import { toast } from "react-toastify";

function SingleList({ color, index }) {
  const { hex, weight } = color;
  //   console.log(color);

  async function saveToClipboard() {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color Copied successfully");
      } catch (error) {
        toast.error("Failed to copy color to clipboard");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  }

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleList;
