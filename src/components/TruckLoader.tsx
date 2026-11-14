// Laadfiguur: rijdende verhuiswagen (gebaseerd op Uiverse.io, vinodjangid07).
// Bak in WE MOVE-blauw, cabine wit.
const Tire = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30">
    <circle strokeWidth="3" stroke="#282828" fill="#282828" r="13.5" cy="15" cx="15" />
    <circle fill="#DFDFDF" r="7" cy="15" cx="15" />
  </svg>
);

export const TruckLoader = () => (
  <div className="loader" role="status" aria-label="Laden">
    <div className="truckWrapper">
      <div className="truckBody">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 198 93">
          {/* cabine (voorkant): wit */}
          <path strokeWidth="3" stroke="#282828" fill="#FFFFFF" d="M135 22.5H177.264C178.295 22.5 179.22 23.133 179.594 24.0939L192.33 56.8443C192.442 57.1332 192.5 57.4404 192.5 57.7504V89C192.5 90.3807 191.381 91.5 190 91.5H135C133.619 91.5 132.5 90.3807 132.5 89V25C132.5 23.6193 133.619 22.5 135 22.5Z" />
          {/* raam */}
          <path strokeWidth="3" stroke="#282828" fill="#7D8AA8" d="M146 33.5H181.741C182.779 33.5 183.709 34.1415 184.078 35.112L190.538 52.112C191.16 53.748 189.951 55.5 188.201 55.5H146C144.619 55.5 143.5 54.3807 143.5 53V36C143.5 34.6193 144.619 33.5 146 33.5Z" />
          {/* deurklink */}
          <path strokeWidth="2" stroke="#282828" fill="#282828" d="M150 65C150 65.39 149.763 65.8656 149.127 66.2893C148.499 66.7083 147.573 67 146.5 67C145.427 67 144.501 66.7083 143.873 66.2893C143.237 65.8656 143 65.39 143 65C143 64.61 143.237 64.1344 143.873 63.7107C144.501 63.2917 145.427 63 146.5 63C147.573 63 148.499 63.2917 149.127 63.7107C149.763 64.1344 150 64.61 150 65Z" />
          {/* koplamp en bumper */}
          <rect strokeWidth="2" stroke="#282828" fill="#FFFCAB" rx="1" height="7" width="5" y="63" x="187" />
          <rect strokeWidth="2" stroke="#282828" fill="#282828" rx="1" height="11" width="4" y="81" x="193" />
          {/* bak: WE MOVE-blauw */}
          <rect strokeWidth="3" stroke="#282828" fill="#0E3CA0" rx="2.5" height="90" width="121" y="1.5" x="6.5" />
          <rect strokeWidth="2" stroke="#282828" fill="#DFDFDF" rx="2" height="4" width="6" y="84" x="1" />
        </svg>
      </div>
      <div className="truckTires">
        <Tire />
        <Tire />
      </div>
      <div className="road" />
      <svg className="lampPost" viewBox="0 0 40 90" fill="#282828" aria-hidden="true">
        <rect x="18" y="8" width="4" height="82" rx="1" />
        <path d="M20 8c0-5 4-7 9-7h3v4h-3c-3 0-5 1-5 3z" />
        <rect x="27" y="4" width="10" height="5" rx="2" />
      </svg>
    </div>
  </div>
);
