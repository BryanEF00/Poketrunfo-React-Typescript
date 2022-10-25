function CardHome() {
  return (
    <div className="w-10/12 bg-neutral-800 rounded-3xl p-4">
      <div className="flex justify-start">
        <div className="font-bold">#025</div>
      </div>
      <img
        className="mx-auto w-11/12"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
        alt="Pikachu"
      />
      <div className="text-center font-semibold text-xl mb-4">Pikachu</div>
      <div className="w-full flex justify-between items-center gap-2">
        <div className="min-w-[64px] font-extrabold uppercase text-sm">
          Attack
        </div>
        <div
          className="h-2 bg-electric rounded"
          style={{ width: `${((55 / 190) * 100).toFixed(0)}%` }}
        />
        <div className="text-right font-bold w-7">55</div>
      </div>
      <div className="w-full flex justify-between items-center gap-2">
        <div className="min-w-[64px] font-extrabold uppercase text-sm">
          Defense
        </div>
        <div
          className="h-2 bg-electric rounded"
          style={{ width: `${((40 / 250) * 100).toFixed(0)}%` }}
        />
        <div className="text-right font-bold w-7">40</div>
      </div>
      <div className="w-full flex justify-between items-center gap-2">
        <div className="min-w-[64px] font-extrabold uppercase text-sm">
          Sp. Atk
        </div>
        <div
          className="h-2 bg-electric rounded"
          style={{ width: `${((50 / 194) * 100).toFixed(0)}%` }}
        />
        <div className="text-right font-bold w-7">50</div>
      </div>
      <div className="w-full flex justify-between items-center gap-2">
        <div className="min-w-[64px] font-extrabold uppercase text-sm">
          Sp. Def
        </div>
        <div
          className="h-2 bg-electric rounded"
          style={{ width: `${((50 / 250) * 100).toFixed(0)}%` }}
        />
        <div className="min-w-[24px] text-right font-bold w-7">50</div>
      </div>
      <div className="w-full flex justify-between items-center gap-2">
        <div className="min-w-[64px] font-extrabold uppercase text-sm">
          Speed
        </div>
        <div
          className="h-2 bg-electric rounded"
          style={{ width: `${((90 / 200) * 100).toFixed(0)}%` }}
        />
        <div className="min-w-[24px] text-right font-bold w-7">90</div>
      </div>
    </div>
  );
}

export default CardHome;
