import imgRectangle16 from "figma:asset/9138672a400b18c388b2e5ac915c3c9d651a1908.png";

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] bg-[#fc4e6a] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[80px_80px] ml-0 mt-0 size-[80px]" style={{ maskImage: `url('${imgRectangle16}')` }} />
    </div>
  );
}

function Frame238() {
  return (
    <div className="capitalize content-stretch flex flex-col items-start leading-[normal] relative shrink-0 w-[124px]">
      <p className="font-['Figtree:ExtraBold',_sans-serif] font-extrabold relative shrink-0 text-[30px] text-black w-full">260+</p>
      <p className="font-['Figtree:Medium',_sans-serif] font-medium relative shrink-0 text-[#666666] text-[17px] w-full">{` Online Resume Created`}</p>
    </div>
  );
}

export default function Frame239() {
  return (
    <div className="bg-white relative rounded-[10px] size-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[20px] items-center justify-center p-[30px] relative size-full">
          <MaskGroup />
          <Frame238 />
        </div>
      </div>
    </div>
  );
}