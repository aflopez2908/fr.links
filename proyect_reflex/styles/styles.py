from enum import Enum
import reflex as rx
from .colors import Color as color
from .colors import TextColor as Tcolor
from .fonts import font as font
import proyect_reflex.views.links.url as url

# Constants
MAX_WIDTH = "600px"
MARGIN_Y = "1rem"

stylesheets = [
    "myfonts.css",
    'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Workbench&display=swap'
]


# sizes

class Size(Enum):
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    MEDIUM_BIG = "1.7em"
    BIG = "2em"


# styles
# se hace un map para generar estilos por defecto para toda la aplicacion
BASE_STYLE = {
    "background_image": url.BACKGROUND_BLACK,
    "margin": "1rem",
    rx.Button: {
        "display": "inline",
        "width": "100%",
        "height": "100%",
        "padding": Size.SMALL.value,
        "border_radius": Size.MEDIUM.value,
        "background_color": color.CONTENT.value,
        "color": Tcolor.BODY.value,
        "white_space": "normal",
        "_hover": {"background_color": color.SECONDARY.value}
    },
    rx.Link: {

        "text_decoration": "none",
        "_hover": {}

    }
}

tittle_style = dict(
    width="100%",
    padding_top=Size.DEFAULT.value,
    font_family=font.DEFAULT.value

)
button_tittle_style = dict(
    font_size=Size.DEFAULT.value,
    font_family=font.DEFAULT.value
)
button_text_style = dict(
    font_size=Size.DEFAULT.value,
    font_family=font.OPTIONAL2.value
)

button_body_style = dict(
    font_size=Size.MEDIUM.value,
)
