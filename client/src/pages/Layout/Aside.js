import React from "react";
import {useNavigate, useLocation} from "react-router-dom"

import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TransformIcon from '@mui/icons-material/Transform';
import { Drawer, Box, MenuList, MenuItem, Stack, Typography } from "@mui/material";
//background-image: linear-gradient(red, yellow);

function MyMenuItem({ item }) {

    let navigate = useNavigate();
    // let location = useLocation();

    const [image, setImage] = React.useState("regular");

    // React.useEffect(() => {
    //     console.log(location);
    //     if(location.pathname == item.to) {
    //         return setImage("hover")
    //     }else {
    //         return setImage("regular")
    //     }
    // }, [image])


    return (
        <MenuItem
            sx={{ my: 2 }}
            onClick={()=> navigate(item.to)}
            onMouseEnter={() => setImage("hover")}
            onMouseLeave={() => setImage("regular")}
        >
            <Box sx={{ width: "120px" }}>
                <img src={item.images[image]} style={{ width: "85%", display: "block", margin: "auto" }} />
                <Typography variant="subtitle1" textAlign="center" sx={{ width: 1 }}>{item.title}</Typography>
            </Box>
        </MenuItem>
    )
}

const menuItems = {

    1: {
        title: "Home",
        to: "/userhome",
        images: {
            regular: `./images/icons/svg/HomeT.svg`,
            hover: `./images/icons/svg/homeTM.svg`,
            selected: " "
        }
    },

    2: {
        title: "Home",
        to: "/userhome",
        images: {
            regular: `./images/icons/svg/home.svg`,
            hover: `./images/icons/svg/homeM.svg`,
            selected: " "
        }
    },

    3: {
        title: "Chat With Manager",
        to: "/chat",
        images: {
            regular: `./images/icons/svg/bankerT.svg`,
            hover: `./images/icons/svg/bankerTM.svg`,
            selected: " "
        }
    },

    4: {
        title: "Chat With Manager",
        to: "/chat",
        images: {
            regular: `./images/icons/svg/banker.svg`,
            hover: `./images/icons/svg/bankerM.svg`,
            selected: " "
        }
    },

    5: {
        title: "Chat",
        to: "/adminChat",
        images: {
            regular: `./images/icons/svg/chatT.svg`,
            hover: `./images/icons/svg/chatTM.svg`,
            selected: " "
        }
    },

    6: {
        title: "Chat",
        to: "/adminChat",
        images: {
            regular: `./images/icons/svg/chat.svg`,
            hover: `./images/icons/svg/chatM.svg`,
            selected: " "
        }
    },

    7: {
        title: "Documents",
        to: "/documents",
        images: {
            regular: `./images/icons/svg/confDocT.svg`,
            hover: `./images/icons/svg/confDocTM.svg`,
            selected: " "
        }
    },

    8: {
        title: "Documents",
        to: "/documents",
        images: {
            regular: `./images/icons/svg/confDoc.svg`,
            hover: `./images/icons/svg/confDocM.svg`,
            selected: " "
        }
    },

    9: {
        title: "Credit-Card Operations",
        to: "/creditcards",
        images: {
            regular: `./images/icons/svg/credit-cardT.svg`,
            hover: `./images/icons/svg/credit-cardTM.svg`,
            selected: " "
        }
    },

    10: {
        title: "Credit-Card Operations",
        to: "/creditcards",
        images: {
            regular: `./images/icons/svg/credit-card.svg`,
            hover: `./images/icons/svg/credit-cardM.svg`,
            selected: " "
        }
    },

    9: {
        title: "Credit-Card Operations",
        to: "/creditcards",
        images: {
            regular: `./images/icons/svg/cc2.svg`,
            hover: `./images/icons/svg/cc1.svg`,
            selected: " "
        }
    },

    10: {
        title: "Credit-Card Operations",
        to: "/creditcards",
        images: {
            regular: `./images/icons/svg/cc3.svg`,
            hover: `./images/icons/svg/cc4.svg`,
            selected: " "
        }
    },

    11: {
        title: "current Money",
        to: "/current",
        images: {
            regular: `./images/icons/svg/currentT.svg`,
            hover: `./images/icons/svg/currentTM.svg`,
            selected: " "
        }
    },

    12: {
        title: "current Money",
        to: "/current",
        images: {
            regular: `./images/icons/svg/current.svg`,
            hover: `./images/icons/svg/currentM.svg`,
            selected: " "
        }
    },

    13: {
        title: "ID",
        to: "/details",
        images: {
            regular: `./images/icons/svg/idT.svg`,
            hover: `./images/icons/svg/idTM.svg`,
            selected: " "
        }
    },

    14: {
        title: "ID",
        to: "/details",
        images: {
            regular: `./images/icons/svg/id.svg`,
            hover: `./images/icons/svg/idM.svg`,
            selected: " "
        }
    },

    15: {
        title: "Loan",
        to: "/confirmloan",
        images: {
            regular: `./images/icons/svg/loanT.svg`,
            hover: `./images/icons/svg/loanTM.svg`,
            selected: " "
        }
    },

    16: {
        title: "Loan",
        to: "/confirmloan",
        images: {
            regular: `./images/icons/svg/loan.svg`,
            hover: `./images/icons/svg/loanM.svg`,
            selected: " "
        }
    },

    17: {
        title: "Change Password",
        to: "/password",
        images: {
            regular: `./images/icons/svg/passwordT.svg`,
            hover: `./images/icons/svg/passwordTM.svg`,
            selected: " "
        }
    },

    18: {
        title: "Change Password",
        to: "/password",
        images: {
            regular: `./images/icons/svg/password.svg`,
            hover: `./images/icons/svg/passwordM.svg`,
            selected: " "
        }
    },

    19: {
        title: "Loan Request",
        to: "/loanrequest",
        images: {
            regular: `./images/icons/svg/loanRecT.svg`,
            hover: `./images/icons/svg/loanRecTM.svg`,
            selected: " "
        }
    },

    20: {
        title: "Loan Request",
        to: "/loanrequest",
        images: {
            regular: `./images/icons/svg/loanRec.svg`,
            hover: `./images/icons/svg/loanRecM.svg`,
            selected: " "
        }
    },

    21: {
        title: "Savings",
        to: "/savings",
        images: {
            regular: `./images/icons/svg/savingsT.svg`,
            hover: `./images/icons/svg/savingsTM.svg`,
            selected: " "
        }
    },

    22: {
        title: "Savings",
        to: "/savings",
        images: {
            regular: `./images/icons/svg/grey6.svg`,
            hover: `./images/icons/svg/grey3.svg`,
            selected: " "
        }
    },

    23: {
        title: "Requestes status",
        to: "/requeststatus",
        images: {
            regular: `./images/icons/svg/statusT.svg`,
            hover: `./images/icons/svg/statusTM.svg`,
            selected: " "
        }
    },

    24: {
        title: "Requests status",
        to: "/requeststatus",
        images: {
            regular: `./images/icons/svg/status.svg`,
            hover: `./images/icons/svg/statusM.svg`,
            selected: " "
        }
    },



    25: {
        title: "Upload Documents",
        to: "/documents",
        images: {
            regular: `./images/icons/svg/documentT.svg`,
            hover: `./images/icons/svg/documentTM.svg`,
            selected: " "
        }
    },

    26: {
        title: "Upload Documents",
        to: "/documents",
        images: {
            regular: `./images/icons/svg/document.svg`,
            hover: `./images/icons/svg/documentM.svg`,
            selected: " "
        }
    },

    27: {
        title: "Update Details",
        to: "/details",
        images: {
            regular: `./images/icons/svg/idT.svg`,
            hover: `./images/icons/svg/idTM.svg`,
            selected: " "
        }
    },

    28: {
        title: "Update Details",
        to: "/details",
        images: {
            regular: `./images/icons/svg/id.svg`,
            hover: `./images/icons/svg/idM.svg`,
            selected: " "
        }
    },

    29: {
        title: "Users",
        to: "/users",
        images: {
            regular: `./images/icons/svg/usersT.svg`,
            hover: `./images/icons/svg/usersTM.svg`,
            selected: " "
        }
    },

    30: {
        title: "Users",
        to: "/users",
        images: {
            regular: `./images/icons/svg/users.svg`,
            hover: `./images/icons/svg/usersM.svg`,
            selected: " "
        }
    },


}

function Aside({ items }) {

    return (
        <Drawer variant="permanent" hideBackdrop open={true} sx={{ border: "none" }} PaperProps={{ elevation: 0 }}>
            <Box sx={{ width: "150px", mt: "13vh", height: "85vh", bgcolor: "primary.main", backgroundImage: "linear-gradient(rgba(100, 47, 126, 0.5735), rgba(100, 47, 126, 0.0735))", borderRadius: "0 24px 24px 0" }}>
                <Box sx={{ mt: 2 }}>
                    <MenuList>
                        {items.map((item, index) => <MyMenuItem key={index} item={menuItems[item]} />)}
                    </MenuList>
                </Box>
            </Box>
        </Drawer>
    )
}
export default Aside;