interface FilterIconProps {
  fillColor: string;
}

const FilterIcon = ({ fillColor = '' }: FilterIconProps) => (
  <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.5883 3.01609L14.7526 0.228365L0.187197 8.60984C0.187113 15.9487 -0.000363214 30.3722 5.28617e-07 30.8125C0.000133395 30.9733 3.33914 32.893 5.17385 33.8104L9.90846 30.8231V25.319L19.5883 19.7938V3.01609Z"
      fill={fillColor}
    />
    <path
      d="M19.8159 3.01609C19.816 2.97754 19.8059 2.93966 19.7866 2.90625C19.7674 2.87285 19.7397 2.84511 19.7063 2.82584L14.8622 0.028965C14.8288 0.00998093 14.791 0 14.7526 0C14.7142 0 14.6764 0.00998093 14.643 0.028965L0.110648 8.41695C0.0769347 8.43651 0.0490225 8.46468 0.0297665 8.49857C0.0105104 8.53246 0.000601403 8.57086 0.00105289 8.60984V30.9839C0.00115353 31.0224 0.01132 31.0603 0.0305442 31.0936C0.0497685 31.127 0.0773825 31.1548 0.110648 31.1742L4.95476 33.9702C4.98795 33.9898 5.02581 34.0001 5.06435 34C5.10292 34.0002 5.14081 33.9899 5.17395 33.9702L10.0181 31.1742C10.0514 31.1549 10.0792 31.1272 10.0984 31.0938C10.1176 31.0604 10.1277 31.0225 10.1277 30.9839V25.5138L19.7063 19.9902C19.7397 19.971 19.7675 19.9433 19.7867 19.9099C19.806 19.8764 19.816 19.8385 19.8159 19.8V3.01609ZM19.3775 19.4168L14.9718 16.8733V0.598861L19.3775 3.14147V19.4168ZM9.68928 25.5138V30.599L6.38476 28.6965L5.28354 28.0608V22.9712L9.68928 25.5138ZM14.5334 0.598861V16.8733L4.95476 22.4039C4.92156 22.4232 4.89398 22.4508 4.87476 22.484C4.85553 22.5173 4.84533 22.5549 4.84516 22.5933V28.0608L0.439434 30.6043V8.73609L14.5334 0.598861ZM5.06435 33.5274L0.658625 30.9848L5.06435 28.4413L9.47009 30.9839L5.06435 33.5274ZM9.90847 25.1377L5.50273 22.5951L14.7526 17.2547L15.8547 17.886L19.1583 19.7938L9.90847 25.1377Z"
      fill="black"
    />
    <path
      d="M4.84537 16.9996C4.84539 17.0381 4.85552 17.076 4.87475 17.1094C4.89398 17.1428 4.92164 17.1705 4.95497 17.1899C4.98838 17.2088 5.02614 17.2188 5.06456 17.2188C5.10299 17.2188 5.14075 17.2088 5.17416 17.1899L10.0183 14.393C10.0516 14.3739 10.0793 14.3463 10.0985 14.313C10.1178 14.2798 10.1279 14.242 10.1279 14.2036V8.60986C10.1285 8.57085 10.1187 8.53238 10.0994 8.49846C10.0801 8.46454 10.0521 8.4364 10.0183 8.41697C9.98487 8.39799 9.9471 8.38801 9.90868 8.38801C9.87025 8.38801 9.83249 8.39799 9.79908 8.41697L4.95497 11.2165C4.92164 11.2358 4.89398 11.2636 4.87475 11.297C4.85552 11.3303 4.84539 11.3682 4.84537 11.4067V16.9996ZM5.28375 11.7864L9.4703 14.2036L5.28375 16.62V11.7864ZM9.68949 13.824L5.50294 11.4067L9.68949 8.9895V13.824Z"
      fill="black"
    />
  </svg>
);

export { FilterIcon };
