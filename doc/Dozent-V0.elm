module Dozent exposing (Dozent, Model, Msg(..), config, dozentMitNamen, erzeugeDozenten, init, main, update, updateInsMenue, updateName, updateSollstunden, updateVorname, view, viewInput, withStyle)

import Bootstrap.Button as Button
import Bootstrap.Form as Form
import Bootstrap.Form.Checkbox as Checkbox
import Bootstrap.Form.Input as Input
import Bootstrap.Modal as Modal
import Browser
import Debug exposing (..)
import Dict exposing (Dict)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import List.Extra
import Table


type alias Dozent =
    { name : String
    , vorname : String
    , auslastungen : List Int
    , insMenue : Bool
    , sollStunden : Int
    }


updateName record value =
    { record | name = value }


updateVorname record value =
    { record | vorname = value }


updateInsMenue record value =
    { record
        | insMenue = value
    }


updateSollstunden record value =
    { record | sollStunden = Maybe.withDefault 0 (String.toInt value) }


type alias Model =
    { dozenten : List Dozent
    , tableState : Table.State
    , query : String
    , modalVisibility : Modal.Visibility
    , neuerDozent : Dozent
    , clickedDozent : Bool
    }


erzeugeDozenten =
    [ Dozent "Gans" "Gustav" [] True 600
    , Dozent "Duck" "Donald" [] True 500
    , Dozent "Düsentrieb" "Daniel" [] False 600
    ]


dozentMitNamen name dozenten =
    let
        dozent =
            List.Extra.find (\d -> d.name == name) dozenten
    in
    case dozent of
        Just doz ->
            doz

        Nothing ->
            Dozent "Unbekannter" "Fehler" [] True 0


ersetze doz dozenten =
    if List.any (\d -> d.name == doz.name) dozenten then
        List.Extra.updateIf (\d -> d.name == doz.name) (\d -> doz) dozenten

    else
        doz :: dozenten


init : List Dozent -> ( Model, Cmd Msg )
init dozenten =
    let
        model =
            { dozenten = dozenten
            , tableState = Table.initialSort "Name"
            , query = ""
            , modalVisibility = Modal.hidden
            , neuerDozent = Dozent "" "" [] True 0
            , clickedDozent = False
            }
    in
    ( model, Cmd.none )



-- UPDATE


type Msg
    = SetQuery String
    | SetTableState Table.State
    | NeuerDozent
    | AenderDozent
    | CloseModal
    | ShowModal String
    | Name String
    | Vorname String
    | InsMenue Bool
    | Sollstunden String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        SetQuery newQuery ->
            ( { model | query = newQuery }
            , Cmd.none
            )

        SetTableState newState ->
            ( { model | tableState = newState }
            , Cmd.none
            )

        NeuerDozent ->
            ( { model
                | modalVisibility = Modal.hidden
                , dozenten = model.neuerDozent :: model.dozenten
              }
            , Cmd.none
            )

        AenderDozent ->
            ( { model
                | modalVisibility = Modal.hidden
                , dozenten = ersetze model.neuerDozent model.dozenten
              }
            , Cmd.none
            )

        Name string ->
            ( { model | neuerDozent = updateName model.neuerDozent string }
            , Cmd.none
            )

        Vorname string ->
            ( { model | neuerDozent = updateVorname model.neuerDozent string }
            , Cmd.none
            )

        InsMenue checked ->
            ( { model | neuerDozent = updateInsMenue model.neuerDozent checked }
            , Cmd.none
            )

        Sollstunden string ->
            ( { model
                | neuerDozent =
                    updateSollstunden model.neuerDozent string
              }
            , Cmd.none
            )

        CloseModal ->
            ( { model
                | modalVisibility = Modal.hidden
                , clickedDozent = False
              }
            , Cmd.none
            )

        ShowModal doz ->
            ( { model
                | modalVisibility = Modal.shown
                , neuerDozent = dozentMitNamen doz model.dozenten
                , clickedDozent = True
              }
            , Cmd.none
            )



-- VIEW


withStyle html =
    div []
        [ node "style"
            [ type_ "text/css" ]
            [ text "@import url(./style.css)" ]
        , node "style"
            [ type_ "text/css" ]
            [ text "@import url(https://www.w3schools.com/w3css/4/w3.css)" ]
        , node "style"
            [ type_ "text/css" ]
            [ text "@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css)" ]
        , html
        ]


view : Model -> Html Msg
view model =
    let
        lowerQuery =
            String.toLower model.query

        acceptablePeople =
            List.filter (String.contains lowerQuery << String.toLower << .name)
                model.dozenten
    in
    div []
        [ h1 [] [ text "Dozenten" ]
        , div []
            [ div
                [ class "w3-sidebar"
                , class "w3-light-grey"
                , class "w3-bar-block"
                , style "width" "10%"
                ]
                [ h4 [ class "w3-bar-item" ] [ text "Menü" ]
                , a
                    [ href "#"
                    , class "w3-bar-item"
                    , class "w3-button"

                    -- , Html.Events.onClick <| ShowModal
                    ]
                    [ text "schließen" ]
                ]
            , Modal.config CloseModal
                |> Modal.small
                |> Modal.hideOnBackdropClick True
                |> Modal.h3 [] [ text "Dozent" ]
                |> Modal.body []
                    [ Form.form []
                        [ viewInput "text" "Name" model.neuerDozent.name Name
                        , viewInput "text"
                            "Vorname"
                            model.neuerDozent.vorname
                            Vorname
                        , Checkbox.checkbox
                            [ Checkbox.id "checkout"
                            , Checkbox.checked model.neuerDozent.insMenue
                            , Checkbox.onCheck InsMenue
                            ]
                            "ins Menü"
                        , viewInput "number"
                            "Sollstunden"
                            (toString model.neuerDozent.sollStunden)
                            Sollstunden
                        ]
                    ]
                |> Modal.footer []
                    [ Button.button
                        [ Button.outlinePrimary
                        , Button.attrs
                            [ onClick
                                (if model.clickedDozent then
                                    AenderDozent

                                 else
                                    NeuerDozent
                                )
                            ]
                        ]
                        [ text "speichern" ]
                    ]
                |> Modal.view model.modalVisibility
            , div [ class "w3-container", style "margin-left" "10%" ]
                [ input [ placeholder "Search by Name", onInput SetQuery ] []
                , Table.view config model.tableState acceptablePeople
                ]
            ]
        ]
        |> withStyle


boolTojaNein b =
    if b then
        "ja"

    else
        "nein"


viewInput t p v toMsg =
    let
        atts =
            [ Input.attrs [ placeholder p, value v, onInput toMsg ] ]
    in
    case t of
        "number" ->
            Input.number atts

        _ ->
            Input.text atts


config : Table.Config Dozent Msg
config =
    Table.config
        { toId = .name
        , toMsg = SetTableState
        , columns =
            [ nameClickColumn "Name" .name
            , Table.stringColumn "Vorname" .vorname
            , Table.stringColumn "ins Menü"
                (\i -> boolTojaNein (.insMenue i))
            , Table.intColumn "Stundensoll" .sollStunden
            ]
        }


nameClickColumn name f =
    Table.veryCustomColumn
        { name = name
        , viewData = \data -> viewNameLink (f data)
        , sorter = Table.decreasingBy f
        }


viewNameLink name =
    Table.HtmlDetails []
        [ a
            [ href "#"
            , Html.Events.onClick <|
                ShowModal name
            ]
            [ text name ]
        ]


main =
    Browser.element
        { init = \() -> init erzeugeDozenten
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }
