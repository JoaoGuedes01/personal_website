import React from 'react'

const svgsIcons = (props) => {
    return (
        <>
            {props.name == "ml" &&
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.9473 9.80938V7.69125C19.3067 7.59188 19.5723 7.26563 19.5723 6.87563C19.5723 6.40688 19.1911 6.02563 18.7223 6.02563C18.6029 6.02563 18.4898 6.05063 18.3867 6.095L16.9086 4.2475C17.0104 4.1075 17.0723 3.93625 17.0723 3.75C17.0723 3.28125 16.6911 2.9 16.2223 2.9C15.9717 2.9 15.7486 3.01063 15.5929 3.18375L13.3061 2.04C13.3167 1.98688 13.3223 1.93188 13.3223 1.875C13.3223 1.40625 12.9411 1.025 12.4723 1.025C12.0817 1.025 11.7554 1.29063 11.6561 1.65H8.91294C8.81356 1.29063 8.48731 1.025 8.09731 1.025C7.62856 1.025 7.24731 1.40625 7.24731 1.875C7.24731 1.93188 7.25356 1.98688 7.26419 2.04L5.60169 2.87125C5.44606 2.69875 5.22294 2.5875 4.97231 2.5875C4.50356 2.5875 4.12231 2.96875 4.12231 3.4375C4.12231 3.60813 4.17356 3.76625 4.26044 3.89938L2.84606 5.49063C2.73294 5.43438 2.60731 5.4 2.47231 5.4C2.00356 5.4 1.62231 5.78125 1.62231 6.25C1.62231 6.64063 1.88794 6.96625 2.24731 7.06563V9.18375C1.88794 9.28313 1.62231 9.60938 1.62231 9.99938C1.62231 10.4681 2.00356 10.8494 2.47231 10.8494C2.81356 10.8494 3.10606 10.6463 3.24169 10.355L5.38169 10.7119C5.42606 11.14 5.78356 11.475 6.22231 11.475C6.27919 11.475 6.33419 11.4688 6.38731 11.4581L6.90606 12.495C6.73356 12.6513 6.62231 12.8744 6.62231 13.125C6.62231 13.5938 7.00356 13.975 7.47231 13.975C7.76606 13.975 8.02544 13.825 8.17856 13.5975L10.3773 14.3306C10.3761 14.3456 10.3723 14.36 10.3723 14.375C10.3723 14.7656 10.6379 15.0919 10.9973 15.1913V17.3088C10.6379 17.4081 10.3723 17.7344 10.3723 18.125C10.3723 18.5938 10.7536 18.975 11.2223 18.975C11.6911 18.975 12.0723 18.5938 12.0723 18.125C12.0723 17.735 11.8067 17.4081 11.4473 17.3088V15.1906C11.8067 15.0913 12.0723 14.765 12.0723 14.3744C12.0723 14.0919 11.9323 13.8431 11.7198 13.6881L12.1461 12.5506L14.1229 13.1156C14.1229 13.1188 14.1223 13.1219 14.1223 13.125C14.1223 13.515 14.3879 13.8419 14.7473 13.9413V17.3094C14.3879 17.4088 14.1223 17.735 14.1223 18.1256C14.1223 18.5944 14.5036 18.9756 14.9723 18.9756C15.4411 18.9756 15.8223 18.5944 15.8223 18.1256C15.8223 17.7356 15.5567 17.4088 15.1973 17.3094V13.9413C15.5567 13.8419 15.8223 13.5156 15.8223 13.125C15.8223 13.0319 15.8036 12.9438 15.7761 12.86L18.1686 11.2644C18.3179 11.3944 18.5098 11.475 18.7223 11.475C19.1911 11.475 19.5723 11.0938 19.5723 10.625C19.5723 10.235 19.3067 9.90875 18.9473 9.80938ZM13.9436 9.3325C13.9423 9.30438 13.9392 9.27625 13.9348 9.24875L15.8404 8.40188L17.9111 10.2137L13.9436 9.3325ZM13.0973 9.775C12.8767 9.775 12.6973 9.59563 12.6973 9.375C12.6973 9.15438 12.8767 8.975 13.0973 8.975C13.3179 8.975 13.4973 9.15438 13.4973 9.375C13.4973 9.59563 13.3179 9.775 13.0973 9.775ZM13.0973 8.525C12.6286 8.525 12.2473 8.90625 12.2473 9.375C12.2473 9.6575 12.3873 9.90625 12.5998 10.0606L11.8711 12.0044L10.6823 11.665L9.76669 8.46125L13.1811 6.11375L13.5736 6.41938L15.4661 8.07563L13.7504 8.83813C13.5948 8.64875 13.3617 8.525 13.0973 8.525ZM6.30419 9.78313L5.67356 6.15625L7.93106 5.93063V5.92813C8.05356 6.24688 8.36044 6.475 8.72231 6.475C8.72544 6.475 8.72794 6.47438 8.73106 6.47438L9.24544 8.27375L6.76669 9.9775C6.63856 9.87 6.47981 9.80063 6.30419 9.78313ZM8.72231 6.025C8.50169 6.025 8.32231 5.84563 8.32231 5.625C8.32231 5.40438 8.50169 5.225 8.72231 5.225C8.94294 5.225 9.12231 5.40438 9.12231 5.625C9.12231 5.84563 8.94294 6.025 8.72231 6.025ZM7.02231 10.3481L9.37544 8.73L10.1723 11.5194L7.07106 10.6331C7.07106 10.63 7.07169 10.6275 7.07169 10.6244C7.07231 10.5275 7.05231 10.4356 7.02231 10.3481ZM15.6779 4.3975C15.8261 4.52188 16.0142 4.6 16.2223 4.6C16.3417 4.6 16.4548 4.575 16.5579 4.53063L18.0361 6.3775C17.9342 6.5175 17.8723 6.68875 17.8723 6.875C17.8723 6.91813 17.8786 6.95938 17.8848 7.00063L15.9198 7.87375L13.8604 6.07188L13.5704 5.84625L15.6779 4.3975ZM18.2542 9.91625L16.2929 8.20063L18.0686 7.41188C18.1786 7.545 18.3261 7.64375 18.4973 7.69063V9.80875C18.4104 9.83313 18.3279 9.86813 18.2542 9.91625ZM19.1223 6.875C19.1223 7.09563 18.9429 7.275 18.7223 7.275C18.5017 7.275 18.3223 7.09563 18.3223 6.875C18.3223 6.65438 18.5017 6.475 18.7223 6.475C18.9429 6.475 19.1223 6.65438 19.1223 6.875ZM16.2223 3.35C16.4429 3.35 16.6223 3.52938 16.6223 3.75C16.6223 3.97063 16.4429 4.15 16.2223 4.15C16.0017 4.15 15.8223 3.97063 15.8223 3.75C15.8223 3.52938 16.0017 3.35 16.2223 3.35ZM12.4723 1.475C12.6929 1.475 12.8723 1.65438 12.8723 1.875C12.8723 2.09563 12.6929 2.275 12.4723 2.275C12.2517 2.275 12.0723 2.09563 12.0723 1.875C12.0723 1.65438 12.2517 1.475 12.4723 1.475ZM12.4723 2.725C12.7229 2.725 12.9461 2.61438 13.1017 2.44125L15.3886 3.585C15.3779 3.63813 15.3723 3.69313 15.3723 3.75C15.3723 3.8475 15.3923 3.93938 15.4223 4.02688L13.1973 5.55688L8.88231 2.20063C8.89544 2.16875 8.90419 2.13438 8.91356 2.1H11.6567C11.7554 2.45938 12.0817 2.725 12.4723 2.725ZM8.09731 1.475C8.31794 1.475 8.49731 1.65438 8.49731 1.875C8.49731 2.09563 8.31794 2.275 8.09731 2.275C7.87669 2.275 7.69731 2.09563 7.69731 1.875C7.69731 1.65438 7.87669 1.475 8.09731 1.475ZM7.46794 2.44125C7.62356 2.61375 7.84669 2.725 8.09731 2.725C8.28731 2.725 8.46169 2.66 8.60356 2.55375L12.8086 5.82375L9.63669 8.00438L9.16356 6.34813C9.40731 6.19875 9.57231 5.93188 9.57231 5.625C9.57231 5.15625 9.19106 4.775 8.72231 4.775C8.30169 4.775 7.95419 5.0825 7.88669 5.48438V5.4825L5.59606 5.71125L5.33356 4.20375C5.62169 4.0675 5.82231 3.77625 5.82231 3.4375C5.82231 3.38063 5.81606 3.32563 5.80544 3.2725L7.46794 2.44125ZM3.26294 5.94438C3.24169 5.88938 3.21606 5.83688 3.18419 5.78813L4.59856 4.19688C4.68794 4.24125 4.78606 4.26875 4.89044 4.27938L5.14731 5.75625L3.26294 5.94438ZM4.97231 3.0375C5.19294 3.0375 5.37231 3.21688 5.37231 3.4375C5.37231 3.65813 5.19294 3.8375 4.97231 3.8375C4.75169 3.8375 4.57231 3.65813 4.57231 3.4375C4.57231 3.21688 4.75169 3.0375 4.97231 3.0375ZM2.07231 6.25C2.07231 6.02938 2.25169 5.85 2.47231 5.85C2.69294 5.85 2.87231 6.02938 2.87231 6.25C2.87231 6.47063 2.69294 6.65 2.47231 6.65C2.25169 6.65 2.07231 6.47063 2.07231 6.25ZM2.47231 10.4C2.25169 10.4 2.07231 10.2206 2.07231 10C2.07231 9.77938 2.25169 9.6 2.47231 9.6C2.69294 9.6 2.87231 9.77938 2.87231 10C2.87231 10.2206 2.69294 10.4 2.47231 10.4ZM5.45294 10.2688L3.31294 9.91188C3.27606 9.56125 3.02856 9.27563 2.69669 9.18375V7.06563C3.01106 6.97875 3.25169 6.71813 3.30731 6.3925L5.22419 6.20063L5.86044 9.85875C5.68169 9.94375 5.53731 10.0888 5.45294 10.2688ZM5.82231 10.625C5.82231 10.4044 6.00169 10.225 6.22231 10.225C6.44294 10.225 6.62231 10.4044 6.62231 10.625C6.62231 10.8456 6.44294 11.025 6.22231 11.025C6.00169 11.025 5.82231 10.8456 5.82231 10.625ZM7.47231 13.525C7.25169 13.525 7.07231 13.3456 7.07231 13.125C7.07231 12.9044 7.25169 12.725 7.47231 12.725C7.69294 12.725 7.87231 12.9044 7.87231 13.125C7.87231 13.3456 7.69294 13.525 7.47231 13.525ZM8.31794 13.1694C8.31856 13.1544 8.32231 13.14 8.32231 13.125C8.32231 12.6563 7.94106 12.275 7.47231 12.275C7.41544 12.275 7.36044 12.2813 7.30731 12.2919L6.78856 11.255C6.84981 11.2 6.90231 11.1369 6.94544 11.0663L10.3179 12.0294L10.7817 13.6519C10.6767 13.7163 10.5848 13.8006 10.5161 13.9031L8.31794 13.1694ZM11.6223 18.125C11.6223 18.3456 11.4429 18.525 11.2223 18.525C11.0017 18.525 10.8223 18.3456 10.8223 18.125C10.8223 17.9044 11.0017 17.725 11.2223 17.725C11.4429 17.725 11.6223 17.9044 11.6223 18.125ZM11.2223 14.775C11.0017 14.775 10.8223 14.5956 10.8223 14.375C10.8223 14.1544 11.0017 13.975 11.2223 13.975C11.4429 13.975 11.6223 14.1544 11.6223 14.375C11.6223 14.5956 11.4429 14.775 11.2223 14.775ZM11.2979 13.5325C11.2723 13.53 11.2479 13.525 11.2223 13.525C11.2192 13.525 11.2167 13.5256 11.2136 13.5256L10.8273 12.1744L11.7123 12.4269L11.2979 13.5325ZM12.3048 12.1288L13.0217 10.2169C13.0473 10.2194 13.0717 10.2244 13.0973 10.2244C13.4217 10.2244 13.7017 10.0394 13.8448 9.77125L17.8767 10.6669C17.8804 10.7444 17.8954 10.8188 17.9192 10.8894L15.5267 12.485C15.3767 12.3556 15.1848 12.275 14.9723 12.275C14.6654 12.275 14.3986 12.44 14.2486 12.6844L12.3048 12.1288ZM15.3723 18.125C15.3723 18.3456 15.1929 18.525 14.9723 18.525C14.7517 18.525 14.5723 18.3456 14.5723 18.125C14.5723 17.9044 14.7517 17.725 14.9723 17.725C15.1929 17.725 15.3723 17.9044 15.3723 18.125ZM14.9723 13.525C14.7517 13.525 14.5723 13.3456 14.5723 13.125C14.5723 12.9044 14.7517 12.725 14.9723 12.725C15.1929 12.725 15.3723 12.9044 15.3723 13.125C15.3723 13.3456 15.1929 13.525 14.9723 13.525ZM18.7223 11.025C18.5017 11.025 18.3223 10.8456 18.3223 10.625C18.3223 10.4044 18.5017 10.225 18.7223 10.225C18.9429 10.225 19.1223 10.4044 19.1223 10.625C19.1223 10.8456 18.9429 11.025 18.7223 11.025Z" fill={props.theme === "light" ? "black" : "white"} />
                </svg>
            }

            {props.name == "netinf" &&
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.50167 8.00067C7.78372 8.00067 8.01237 7.77202 8.01237 7.48997C8.01237 7.20792 7.78372 6.97927 7.50167 6.97927C7.21961 6.97927 6.99097 7.20792 6.99097 7.48997C6.99097 7.77202 7.21961 8.00067 7.50167 8.00067Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M15.064 3.88331C14.8727 3.88331 14.682 3.89419 14.493 3.916C14.2652 2.9753 13.7649 2.11846 13.0429 1.44971C12.1242 0.598779 10.9283 0.130219 9.67541 0.130219C7.37033 0.130219 5.40558 1.70427 4.86507 3.88461C2.18356 3.9447 0.0209961 6.14476 0.0209961 8.84035C0.0209961 11.5739 2.24477 13.7976 4.97804 13.7976H5.14781C5.23763 14.5893 5.91112 15.2066 6.72638 15.2066H13.3156C14.1309 15.2066 14.8044 14.5893 14.8942 13.7976H15.064C17.7973 13.7976 20.021 11.5738 20.021 8.84035C20.0211 6.10708 17.7974 3.88331 15.064 3.88331ZM13.9746 13.6173C13.9746 13.9812 13.6796 14.2763 13.3157 14.2763H6.72642C6.36251 14.2763 6.06754 13.9812 6.06754 13.6173V12.6335C6.06754 12.2696 6.36251 11.9746 6.72642 11.9746H13.3157C13.6796 11.9746 13.9746 12.2696 13.9746 12.6335V13.6173ZM13.9746 10.7996C13.9746 11.1635 13.6796 11.4586 13.3157 11.4586H6.72642C6.36251 11.4586 6.06754 11.1635 6.06754 10.7996V9.81575C6.06754 9.45184 6.36251 9.15696 6.72642 9.15696H13.3157C13.6796 9.15696 13.9746 9.45184 13.9746 9.81575V10.7996ZM13.9746 7.98188C13.9746 8.34579 13.6796 8.64086 13.3157 8.64086H6.72642C6.36251 8.64086 6.06754 8.34579 6.06754 7.98188V6.99816C6.06754 6.63425 6.36251 6.33908 6.72642 6.33908H13.3157C13.6796 6.33908 13.9746 6.63425 13.9746 6.99816V7.98188Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M7.50171 13.6363C7.78379 13.6363 8.01246 13.4076 8.01246 13.1255C8.01246 12.8435 7.78379 12.6148 7.50171 12.6148C7.21964 12.6148 6.99097 12.8435 6.99097 13.1255C6.99097 13.4076 7.21964 13.6363 7.50171 13.6363Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M7.50162 10.8184C7.78365 10.8184 8.01227 10.5897 8.01227 10.3077C8.01227 10.0257 7.78365 9.79706 7.50162 9.79706C7.21959 9.79706 6.99097 10.0257 6.99097 10.3077C6.99097 10.5897 7.21959 10.8184 7.50162 10.8184Z" fill={props.theme === "light" ? "black" : "white"} />
                </svg>
            }

            {props.name == "webdev" &&
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9548 16.7821C13.8512 16.7191 13.7609 16.6346 13.6891 16.5321C13.656 16.4849 13.628 16.4349 13.6048 16.3833H1.82843V4.77584H17.8131V12.3551C18.1544 12.3859 18.4407 12.61 18.5609 12.9169C18.6674 12.8586 18.786 12.8225 18.9107 12.8115C18.9951 12.8042 19.0788 12.8094 19.1601 12.8255V1.88418C19.1601 1.26522 18.6566 0.761658 18.0377 0.761658H1.60392C0.985004 0.761658 0.481445 1.26522 0.481445 1.88418V16.6078C0.481445 17.2268 0.985004 17.7303 1.60392 17.7303H13.8525C13.757 17.5367 13.7343 17.3182 13.7905 17.108C13.823 16.9871 13.8791 16.8768 13.9548 16.7821ZM16.5805 2.64659C16.5805 2.41769 16.7661 2.23209 16.995 2.23209H17.4094C17.6384 2.23209 17.8239 2.41764 17.8239 2.64659V3.11633C17.8239 3.34523 17.6383 3.53078 17.4094 3.53078H16.995C16.766 3.53078 16.5805 3.34523 16.5805 3.11633V2.64659ZM14.6533 2.64659C14.6533 2.41769 14.8389 2.23209 15.0677 2.23209H15.4822C15.7112 2.23209 15.8967 2.41764 15.8967 2.64659V3.11633C15.8967 3.34523 15.7111 3.53078 15.4822 3.53078H15.0677C14.8389 3.53078 14.6533 3.34523 14.6533 3.11633V2.64659ZM12.726 2.64659C12.726 2.41769 12.9116 2.23209 13.1405 2.23209H13.5549C13.7839 2.23209 13.9694 2.41764 13.9694 2.64659V3.11633C13.9694 3.34523 13.7839 3.53078 13.5549 3.53078H13.1405C12.9116 3.53078 12.726 3.34523 12.726 3.11633V2.64659Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M20.4788 15.9917L20.3543 15.2854C20.3375 15.1903 20.2468 15.1267 20.1516 15.1435L19.5235 15.2542C19.4481 15.0773 19.3518 14.9115 19.2375 14.7598L19.6478 14.2708C19.6776 14.2353 19.6921 14.1894 19.6881 14.1431C19.684 14.0969 19.6617 14.0542 19.6262 14.0244L19.0769 13.5633C19.0413 13.5335 18.9953 13.519 18.9491 13.5231C18.9028 13.5271 18.8602 13.5494 18.8304 13.5849L18.4205 14.0736C18.2522 13.9878 18.0722 13.9217 17.8837 13.8781V13.2403C17.8837 13.1437 17.8053 13.0653 17.7087 13.0653H16.9915C16.8949 13.0653 16.8165 13.1437 16.8165 13.2403V13.8781C16.6279 13.9217 16.4481 13.9878 16.2797 14.0736L15.8698 13.585C15.8077 13.5109 15.6974 13.5013 15.6233 13.5634L15.0739 14.0244C15.0384 14.0542 15.0162 14.0969 15.0121 14.1431C15.0081 14.1894 15.0225 14.2354 15.0524 14.2709L15.4627 14.7599C15.3485 14.9115 15.2521 15.0773 15.1767 15.2542L14.5486 15.1435C14.4536 15.1268 14.3628 15.1903 14.3459 15.2854L14.2214 15.9917C14.2134 16.0374 14.2238 16.0843 14.2503 16.1224C14.277 16.1604 14.3175 16.1863 14.3632 16.1943L14.9918 16.3051C15.002 16.4999 15.0359 16.6883 15.0905 16.8677L14.538 17.1865C14.4978 17.2096 14.4685 17.2479 14.4565 17.2927C14.4445 17.3375 14.4508 17.3852 14.474 17.4254L14.8326 18.0465C14.8557 18.0867 14.8939 18.116 14.9387 18.128C14.9536 18.132 14.9688 18.134 14.984 18.134C15.0144 18.134 15.0446 18.1261 15.0714 18.1106L15.6243 17.7913C15.7544 17.9306 15.9012 18.0541 16.0616 18.1585L15.8432 18.7582C15.8274 18.8019 15.8295 18.85 15.8491 18.892C15.8687 18.9341 15.9042 18.9666 15.9478 18.9824L16.6216 19.2276C16.6409 19.2347 16.6612 19.2383 16.6815 19.2383C16.7067 19.2383 16.7321 19.2328 16.7555 19.2219C16.7975 19.2023 16.83 19.1668 16.8458 19.1232L17.0641 18.5234C17.1577 18.5347 17.2529 18.5406 17.3496 18.5406C17.4462 18.5406 17.5415 18.5346 17.6351 18.5234L17.8534 19.1232C17.8692 19.1668 17.9018 19.2023 17.9437 19.2219C17.9671 19.2328 17.9924 19.2383 18.0177 19.2383C18.0379 19.2383 18.0582 19.2348 18.0776 19.2276L18.7515 18.9824C18.795 18.9666 18.8305 18.934 18.8501 18.892C18.8697 18.85 18.8718 18.8019 18.8559 18.7582L18.6376 18.1586C18.7979 18.0542 18.9447 17.9306 19.0748 17.7914L19.6277 18.1107C19.6545 18.1261 19.6847 18.1341 19.7152 18.1341C19.7303 18.1341 19.7456 18.132 19.7605 18.1281C19.8053 18.1161 19.8435 18.0867 19.8666 18.0466L20.2252 17.4254C20.2483 17.3853 20.2547 17.3375 20.2427 17.2927C20.2306 17.248 20.2013 17.2097 20.1611 17.1865L19.6088 16.8678C19.6633 16.6883 19.6972 16.4999 19.7074 16.3052L20.336 16.1944C20.3817 16.1863 20.4223 16.1605 20.4489 16.1224C20.4764 16.0843 20.4869 16.0374 20.4788 15.9917ZM17.3502 17.1141C16.8189 17.1141 16.3881 16.6833 16.3881 16.152C16.3881 15.6206 16.8189 15.1899 17.3502 15.1899C17.8815 15.1899 18.3123 15.6206 18.3123 16.152C18.3123 16.6833 17.8815 17.1141 17.3502 17.1141Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M8.32524 11.2101C8.32524 10.9838 8.1926 10.7759 7.98728 10.6805L6.10816 9.80744L7.98733 8.93424C8.1926 8.8388 8.32524 8.63096 8.32524 8.40473V8.38954C8.32524 8.18903 8.22432 8.00495 8.05543 7.89736C7.96199 7.83768 7.85316 7.80611 7.74081 7.80611C7.65613 7.80611 7.57111 7.82473 7.49505 7.86007L4.49085 9.25711C4.28562 9.35255 4.15308 9.56039 4.15308 9.78657V9.82834C4.15308 10.0542 4.28557 10.2619 4.49089 10.3579L7.49539 11.755C7.57307 11.791 7.65579 11.8092 7.74124 11.8092C7.85259 11.8092 7.96108 11.7776 8.05543 11.7176C8.22441 11.6096 8.32529 11.4257 8.32529 11.2254L8.32524 11.2101Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M11.2895 6.38258C11.1799 6.23256 11.0036 6.14302 10.8179 6.14302H10.803C10.548 6.14302 10.3244 6.30614 10.2467 6.54861L8.26737 12.6816C8.21103 12.8587 8.24275 13.0537 8.3522 13.2037C8.46179 13.3536 8.63805 13.4432 8.82375 13.4432H8.83875C9.09365 13.4432 9.31707 13.2801 9.39466 13.0376L11.3738 6.9051C11.4307 6.72816 11.3991 6.53285 11.2895 6.38258Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M15.1505 9.25706L12.1462 7.86002C12.0704 7.82478 11.9855 7.80615 11.9008 7.80615C11.7885 7.80615 11.6796 7.83763 11.5863 7.89722C11.4171 8.00499 11.3162 8.18903 11.3162 8.38953V8.40473C11.3162 8.63076 11.4487 8.83866 11.6542 8.93448L13.5332 9.80748L11.6541 10.6805C11.4488 10.7759 11.3162 10.9838 11.3162 11.2101V11.2254C11.3162 11.4257 11.4171 11.6095 11.5862 11.7177C11.6802 11.7776 11.7888 11.8092 11.9003 11.8092C11.9856 11.8092 12.0682 11.791 12.1464 11.7549L15.1508 10.3577C15.356 10.262 15.4884 10.0543 15.4884 9.82839V9.78662C15.4883 9.56039 15.3557 9.35255 15.1505 9.25706Z" fill={props.theme === "light" ? "black" : "white"} />
                </svg>
            }

            {
                props.name == "netprog" &&
                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6316 10.4099C11.2852 10.4099 11.005 10.69 11.005 11.0364C11.005 11.3828 11.2852 11.6629 11.6316 11.6629H14.9425C15.2889 11.6629 15.569 11.3828 15.569 11.0364C15.569 10.69 15.2889 10.4099 14.9425 10.4099H13.9136V9.52864H17.3977C18.2127 9.52864 18.8749 8.86646 18.8749 8.05146V2.14783C18.8749 1.33284 18.2127 0.670654 17.3977 0.670654H9.1764C8.3614 0.670654 7.69922 1.33284 7.69922 2.14783V8.05656C7.69922 8.87155 8.3614 9.53374 9.1764 9.53374H12.6605V10.4149H11.6316V10.4099ZM8.94718 8.05656V2.14783C8.94718 2.02049 9.04906 1.91862 9.1764 1.91862H17.3977C17.525 1.91862 17.6269 2.02049 17.6269 2.14783V8.05656C17.6269 8.1839 17.525 8.28577 17.3977 8.28577H9.1764C9.04906 8.28068 8.94718 8.1788 8.94718 8.05656Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M8.65182 23.3734C8.65182 23.027 8.37166 22.7469 8.02529 22.7469H6.99636V21.8657H10.4856C11.3006 21.8657 11.9627 21.2035 11.9627 20.3885V14.4849C11.9627 13.6699 11.3006 13.0077 10.4856 13.0077H2.26429C1.44929 13.0077 0.787109 13.6699 0.787109 14.4849V20.3885C0.787109 21.2035 1.44929 21.8657 2.26429 21.8657H5.7484V22.7469H4.71947C4.37309 22.7469 4.09294 23.027 4.09294 23.3734C4.09294 23.7198 4.37309 23.9999 4.71947 23.9999H8.03039C8.37167 23.9949 8.65182 23.7198 8.65182 23.3734ZM2.03507 20.3936V14.4849C2.03507 14.3575 2.13695 14.2557 2.26429 14.2557H10.4856C10.6129 14.2557 10.7148 14.3575 10.7148 14.4849V20.3885C10.7148 20.5158 10.6129 20.6177 10.4856 20.6177H2.26429C2.13695 20.6177 2.03507 20.5158 2.03507 20.3936Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M24.3098 21.8657C25.1248 21.8657 25.787 21.2035 25.787 20.3885V14.4849C25.787 13.6699 25.1248 13.0077 24.3098 13.0077H16.0885C15.2735 13.0077 14.6113 13.6699 14.6113 14.4849V20.3885C14.6113 21.2035 15.2735 21.8657 16.0885 21.8657H19.5726V22.7469H18.5437C18.1973 22.7469 17.9172 23.027 17.9172 23.3734C17.9172 23.7198 18.1973 23.9999 18.5437 23.9999H21.8546C22.201 23.9999 22.4811 23.7198 22.4811 23.3734C22.4811 23.027 22.201 22.7469 21.8546 22.7469H20.8257V21.8657H24.3098ZM15.8593 20.3936V14.4849C15.8593 14.3575 15.9612 14.2557 16.0885 14.2557H24.3098C24.4371 14.2557 24.539 14.3575 24.539 14.4849V20.3885C24.539 20.5158 24.4371 20.6177 24.3098 20.6177H16.0885C15.9612 20.6177 15.8593 20.5158 15.8593 20.3936Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M2.80915 3.68612C2.46277 3.68612 2.18262 3.96628 2.18262 4.31265V11.0364C2.18262 11.3827 2.46277 11.6629 2.80915 11.6629C3.15552 11.6629 3.43567 11.3827 3.43567 11.0364V4.93409H6.00291C6.34928 4.93409 6.62944 4.65393 6.62944 4.30756C6.62944 3.96119 6.34928 3.68103 6.00291 3.68103H2.80915V3.68612Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M19.9443 4.31266C19.9443 4.65904 20.2245 4.93919 20.5709 4.93919H23.1432V11.0415C23.1432 11.3878 23.4233 11.668 23.7697 11.668C24.1161 11.668 24.3963 11.3878 24.3963 11.0415V4.31776C24.3963 3.97139 24.1161 3.69123 23.7697 3.69123H20.5709C20.2245 3.68614 19.9443 3.96629 19.9443 4.31266Z" fill={props.theme === "light" ? "black" : "white"} />
                </svg>

            }

            {
                props.name == "int" &&
                <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3906 22.6813H7.18359C7.07861 22.6813 6.98177 22.6252 6.92969 22.534L0.826172 11.9465C0.774089 11.8561 0.774089 11.7438 0.826172 11.6535L6.92969 1.08219C6.98177 0.991862 7.07943 0.936523 7.18359 0.936523H19.3906C19.4956 0.936523 19.5916 0.991862 19.6445 1.08301L25.748 11.6543C25.8001 11.7446 25.8001 11.8569 25.748 11.9473L19.6445 22.5348C19.5924 22.6252 19.4956 22.6813 19.3906 22.6813ZM7.69141 22.0954H18.8836L13.2871 12.3949L7.69141 22.0954ZM13.79 12.0938L19.3906 21.8016L24.9871 12.0938H13.79ZM1.58708 12.0938L7.18359 21.8016L12.7842 12.0938H1.58708ZM13.799 11.5078H24.9863L19.3906 1.81543L13.799 11.5078ZM1.58789 11.5078H12.776L7.18359 1.81543L1.58789 11.5078ZM7.69141 1.52246L13.2871 11.223L18.8836 1.52246C18.8836 1.52246 7.69141 1.52246 7.69141 1.52246Z" fill={props.theme === "light" ? "black" : "white"} />
                </svg>
            }

            {
                props.name == "gamedev" &&
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.69141 20.097C7.38057 20.097 7.94141 19.5362 7.94141 18.847V17.597H9.19141C9.88057 17.597 10.4414 17.0362 10.4414 16.347C10.4414 15.6579 9.88057 15.097 9.19141 15.097H7.94141V13.847C7.94141 13.1579 7.38057 12.597 6.69141 12.597C6.00225 12.597 5.44141 13.1579 5.44141 13.847V15.097H4.19141C3.50225 15.097 2.94141 15.6579 2.94141 16.347C2.94141 17.0362 3.50225 17.597 4.19141 17.597H5.44141V18.847C5.44141 19.5362 6.00225 20.097 6.69141 20.097ZM4.19141 16.7637C3.96143 16.7637 3.77476 16.5767 3.77476 16.3471C3.77476 16.1175 3.96143 15.9304 4.19141 15.9304H5.85806C6.08848 15.9304 6.27471 15.7437 6.27471 15.5137V13.8471C6.27471 13.6175 6.46138 13.4304 6.69136 13.4304C6.92134 13.4304 7.10801 13.6175 7.10801 13.8471V15.5137C7.10801 15.7437 7.29424 15.9304 7.52466 15.9304H9.19141C9.42139 15.9304 9.60806 16.1175 9.60806 16.347C9.60806 16.5766 9.42139 16.7637 9.19141 16.7637H7.52476C7.29434 16.7637 7.10811 16.9504 7.10811 17.1803V18.847C7.10811 19.0766 6.92144 19.2636 6.69146 19.2636C6.46148 19.2636 6.2748 19.0766 6.2748 18.847V17.1804C6.2748 16.9504 6.08857 16.7637 5.85815 16.7637H4.19141Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M19.1914 10.0971H16.2748V6.34707C16.2748 5.19834 15.3402 4.26372 14.1914 4.26372C13.0427 4.26372 12.1081 5.19829 12.1081 6.34707C12.1081 7.03623 11.5472 7.59707 10.8581 7.59707C10.1689 7.59707 9.60806 7.03623 9.60806 6.34707V1.34707C9.60806 1.11709 9.42183 0.93042 9.19141 0.93042C8.96099 0.93042 8.77476 1.11709 8.77476 1.34707V6.34707C8.77476 7.4958 9.70933 8.43042 10.8581 8.43042C12.0068 8.43042 12.9415 7.49585 12.9415 6.34707C12.9415 5.65791 13.5023 5.09707 14.1915 5.09707C14.8806 5.09707 15.4415 5.65791 15.4415 6.34707V10.5137C15.4415 10.7437 15.6277 10.9304 15.8581 10.9304H19.1914C22.1276 10.9304 24.6081 13.4108 24.6081 16.347V23.0358C24.6081 24.3629 23.3764 25.097 22.5247 25.097C21.3151 25.097 20.5976 24.3125 19.6893 23.3191C18.3768 21.8837 16.7431 20.097 12.9414 20.097C9.14556 20.097 7.51768 21.8799 6.21016 23.3125C5.30015 24.3095 4.5814 25.097 3.35806 25.097C2.48804 25.097 1.27471 24.3045 1.27471 23.0137V16.3471C1.27476 13.4108 3.75518 10.9304 6.69141 10.9304H14.1914C14.4218 10.9304 14.6081 10.7437 14.6081 10.5138C14.6081 10.2838 14.4218 10.0971 14.1914 10.0971H6.69141C3.30347 10.0971 0.441406 12.9592 0.441406 16.3471V23.0138C0.441406 24.7325 1.97847 25.9304 3.35806 25.9304C4.94849 25.9304 5.86055 24.9317 6.82554 23.8746C8.0856 22.4946 9.51309 20.9304 12.9414 20.9304C16.3756 20.9304 17.8097 22.4983 19.0743 23.8817C20.0376 24.935 20.9481 25.9304 22.5248 25.9304C23.9043 25.9304 25.4414 24.7417 25.4414 23.0358V16.3471C25.4414 12.9592 22.5793 10.0971 19.1914 10.0971Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M21.6914 17.597C22.3806 17.597 22.9414 17.0362 22.9414 16.347C22.9414 15.6579 22.3806 15.097 21.6914 15.097C21.0022 15.097 20.4414 15.6579 20.4414 16.347C20.4414 17.0362 21.0022 17.597 21.6914 17.597ZM21.6914 15.9304C21.9214 15.9304 22.1081 16.1175 22.1081 16.347C22.1081 16.5766 21.9214 16.7637 21.6914 16.7637C21.4614 16.7637 21.2748 16.5766 21.2748 16.347C21.2748 16.1175 21.4614 15.9304 21.6914 15.9304Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M19.1914 12.597C18.5022 12.597 17.9414 13.1579 17.9414 13.847C17.9414 14.5362 18.5022 15.097 19.1914 15.097C19.8806 15.097 20.4414 14.5362 20.4414 13.847C20.4414 13.1579 19.8806 12.597 19.1914 12.597ZM19.1914 14.2637C18.9614 14.2637 18.7748 14.0767 18.7748 13.8471C18.7748 13.6175 18.9614 13.4304 19.1914 13.4304C19.4214 13.4304 19.6081 13.6175 19.6081 13.8471C19.6081 14.0766 19.4214 14.2637 19.1914 14.2637Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M16.6914 15.097C16.0022 15.097 15.4414 15.6579 15.4414 16.347C15.4414 17.0362 16.0022 17.597 16.6914 17.597C17.3806 17.597 17.9414 17.0362 17.9414 16.347C17.9414 15.6579 17.3806 15.097 16.6914 15.097ZM16.6914 16.7637C16.4614 16.7637 16.2748 16.5767 16.2748 16.3471C16.2748 16.1175 16.4614 15.9304 16.6914 15.9304C16.9214 15.9304 17.1081 16.1175 17.1081 16.3471C17.1081 16.5767 16.9214 16.7637 16.6914 16.7637Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M19.1914 20.097C19.8806 20.097 20.4414 19.5362 20.4414 18.847C20.4414 18.1579 19.8806 17.597 19.1914 17.597C18.5022 17.597 17.9414 18.1579 17.9414 18.847C17.9414 19.5362 18.5022 20.097 19.1914 20.097ZM19.1914 18.4304C19.4214 18.4304 19.6081 18.6175 19.6081 18.847C19.6081 19.0766 19.4214 19.2637 19.1914 19.2637C18.9614 19.2637 18.7748 19.0766 18.7748 18.847C18.7748 18.6175 18.9614 18.4304 19.1914 18.4304Z" fill={props.theme === "light" ? "black" : "white"} />
                </svg>

            }

            {
                props.name == "datascn" &&
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3691 0.192871V12.0416L24.8465 15.9552C25.4158 14.6015 25.7308 13.1148 25.7308 11.5546C25.7308 5.27987 20.6433 0.192871 14.3691 0.192871Z" fill={props.theme === "light" ? "black" : "white"} />
                    <path d="M12.0927 2.22913C5.81773 2.22913 0.730469 7.31587 0.730469 13.5908C0.730469 19.8663 5.81773 24.953 12.0927 24.953C16.8074 24.953 20.8507 22.0812 22.5703 17.9915L12.0927 14.0779V2.22913Z" fill={props.theme === "light" ? "black" : "white"} />
                </svg>

            }
        </>
    )
}

export default svgsIcons