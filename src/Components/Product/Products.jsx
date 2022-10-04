import React from "react";
import "./Products.css";
import { BsGrid } from "react-icons/bs";
import SingleProduct from "../SingleProduct/SingleProduct";


const Products = () => {

let products=[
  {
  img:"https://s3-alpha-sig.figma.com/img/d2bf/cad4/74510c7fcfcdb99b862787d6e1c8bd6c?Expires=1665964800&Signature=g1nN~Fl8a8ttgQ-TXV63LqjiZWI~~rQ8XDryfNM29CEx37G~xpMTVtT6BndIgl-Lc-lTPeW3RpLhgmlW6cS2S0E8UO8C3bQkHCV3qCcYk8~KnJjcGZMSDhKCd-0aXXUnu0sxtQC~hhT7kvbUcl8at5VqAJeZKEuN-c6HC9sP8JuraOJwf-1tkfMWL5CapGaAvnViZiPHlgBe8cRXkxpLeKPh1TTr7MAe0ARaDPiQALwMmzBK8ods056S6MONrzlGRWxYHNbhM6QEAOcsPWquAOdYl9d2ys~7P7OqU~eCrtff1oR3u45T9bZajiqj-8y5HAdblS6wZWzeV4e718Bqeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"CADBURY",
  Description:"Cadburry Bourville Cranc...",
  CutPrice: "₹ 110",
  Price: "₹ 100",
  InStock:56
},
{
  img:"https://s3-alpha-sig.figma.com/img/3eed/5589/ad48b33e59a5a15b0463dd8c87ccba9c?Expires=1665964800&Signature=M0f4ucQcdETShYiboNb1e~UnX1bOPu~w2GgdsEzZUkFLFXGogEVRvjz2HTM-OnWkD7db6~N9RarCZdQySRS6-oW2~Ky5Eerjn8hRYrao16t9snBa8BE5nOxUx2DI1IUZVqY4SOy7Ee0k9hj1BAKh809h8woYMkjEIDbnwz9tB-RYm6AgPSXI3fU-9awRPq20vrAagJmuA~zA2aK1XyxAhS56zzIJfidk62lik2-7elYg1yJfwWXOHeTNbamPmnXnNexBDl7qlZtGaYvvQkJ5YYYwjtzXTmljRN9ntL4KsJngkBWUb2-7LaklToy6Ybayg84xYSr6Lnq9fARZb5R-0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"SURF EXCEL",
  Description:"Surf Excel Detergent Bar",
  CutPrice: "₹ 110",
  Price: "₹ 100",
  InStock:56
},
{
  img:"https://s3-alpha-sig.figma.com/img/9bb6/20fe/4935d74097843f377271ccf68e71ec0e?Expires=1665964800&Signature=C83yENc0n5YIkKKl-XqmCc5yoVqlx5kPKdfyTOvidXp4sVfEhcpDTlRKO7aGngn51WiwwngrWNGtJEArxtidU~dJrxQTn4ijhJwm30aSsp-Xgg0Xb62J9M5Os2GJkBiy~STQr6N5rfdA2hCeUJkn7pPBG5Ox-0uRlAsIzvidEC1ewaiVKYT~jY5QSQQrjnezz-aCNfY8c3fS2u-8X7HAe45wPRqPxXaahCgOdIh5bR-XXxtZnQwDTloOkfGIJ0Z31YoaVS8N9WrY1rOSDRUy4rLMCvNq6YWUQYLSM1phY1JRiwSK97ajrwyR4pJ1Im7fHsmp08xsaiwcLTaeociFmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"BRU",
  Description:"Bru Instant Coffee",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:"Out of Stock"
}, {
  img:"https://s3-alpha-sig.figma.com/img/1e48/c7a5/36b013809be782d50901aca9a2dc3931?Expires=1665964800&Signature=ZNh3pTEmhg~BnO2WiZRZ87wrCAW2bFrbJ9bBmTiZZJfcPwv2b9nukvPGi2uw589BSu~RFCVaj9E9PLPgz7~PLtH4shZ3r5CFgH3~1nTspEO3jekC9CFzKg9B7mlp90Lgnhv7fVJPbhvaCdhvnVf7xesIMchAeA6hiiIanUv31SlgUCJmzVu~oz1ahGplEpkfLn86QCLIT8MiH6xuzKWEOjZjKiaDFf9Q3hKFYMoQf2e0--EaJt4Ro2MTOYF9ukkojpnypEzRfbbAc3rEFc7X0BTaTYaBTO~f4XBx3GlB6iVccP1vPFXQU~lDY0zOG5K8bGlWsVnvV2BclWPFnyNBJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"NESTLE",
  Description:"Nestle Cerelac Wheat Ap...",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:5
},
{
  img:"https://s3-alpha-sig.figma.com/img/96cf/f0bb/d7da478f425760ecbbf63c2cd659d520?Expires=1665964800&Signature=aQZo2hvLL2Avovz-K1WjBwxBg40dzKyjHooBSS6m3--hwHlDDoC6T8oAPA~JOCRmPzyXBOc5qs3h7QloYXr9bSzRPz-w4UqHuWemcDftmagw8IWEcntuI2g-~H8waifXAEECevgX0V4LPWWhMbKmuaNAsS1QvERCjLe2yRG7yZsdQWFqPWwK1Mwongpe4iQN6sTt4ZMs58cGhkywSnj~77uxnCi9foKxW-JWIn0BUHydqxskPlSmEpH-GxmL9jz5xs80dg2nRlFWxmQVMnBWkEFiPeMKLazUvF2Grq4-ZZ-KVyiVhfbP0LnPbJV0mPGS0aDu0xJ4fUESRm5II9Xx6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"PEPSODENT",
  Description:"Pepsodent Germicheck T...",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:56
},
{
  img:"https://s3-alpha-sig.figma.com/img/1e48/c7a5/36b013809be782d50901aca9a2dc3931?Expires=1665964800&Signature=ZNh3pTEmhg~BnO2WiZRZ87wrCAW2bFrbJ9bBmTiZZJfcPwv2b9nukvPGi2uw589BSu~RFCVaj9E9PLPgz7~PLtH4shZ3r5CFgH3~1nTspEO3jekC9CFzKg9B7mlp90Lgnhv7fVJPbhvaCdhvnVf7xesIMchAeA6hiiIanUv31SlgUCJmzVu~oz1ahGplEpkfLn86QCLIT8MiH6xuzKWEOjZjKiaDFf9Q3hKFYMoQf2e0--EaJt4Ro2MTOYF9ukkojpnypEzRfbbAc3rEFc7X0BTaTYaBTO~f4XBx3GlB6iVccP1vPFXQU~lDY0zOG5K8bGlWsVnvV2BclWPFnyNBJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"Catch",
  Description:"Catch Kasuri Methi",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:56
},
{
  img:"https://s3-alpha-sig.figma.com/img/9bb6/20fe/4935d74097843f377271ccf68e71ec0e?Expires=1665964800&Signature=C83yENc0n5YIkKKl-XqmCc5yoVqlx5kPKdfyTOvidXp4sVfEhcpDTlRKO7aGngn51WiwwngrWNGtJEArxtidU~dJrxQTn4ijhJwm30aSsp-Xgg0Xb62J9M5Os2GJkBiy~STQr6N5rfdA2hCeUJkn7pPBG5Ox-0uRlAsIzvidEC1ewaiVKYT~jY5QSQQrjnezz-aCNfY8c3fS2u-8X7HAe45wPRqPxXaahCgOdIh5bR-XXxtZnQwDTloOkfGIJ0Z31YoaVS8N9WrY1rOSDRUy4rLMCvNq6YWUQYLSM1phY1JRiwSK97ajrwyR4pJ1Im7fHsmp08xsaiwcLTaeociFmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"BRU",
  Description:"Bru Instant Coffee",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:"Out of Stock"
},
{
  img:"https://s3-alpha-sig.figma.com/img/9bb6/20fe/4935d74097843f377271ccf68e71ec0e?Expires=1665964800&Signature=C83yENc0n5YIkKKl-XqmCc5yoVqlx5kPKdfyTOvidXp4sVfEhcpDTlRKO7aGngn51WiwwngrWNGtJEArxtidU~dJrxQTn4ijhJwm30aSsp-Xgg0Xb62J9M5Os2GJkBiy~STQr6N5rfdA2hCeUJkn7pPBG5Ox-0uRlAsIzvidEC1ewaiVKYT~jY5QSQQrjnezz-aCNfY8c3fS2u-8X7HAe45wPRqPxXaahCgOdIh5bR-XXxtZnQwDTloOkfGIJ0Z31YoaVS8N9WrY1rOSDRUy4rLMCvNq6YWUQYLSM1phY1JRiwSK97ajrwyR4pJ1Im7fHsmp08xsaiwcLTaeociFmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"BRU",
  Description:"Bru Instant Coffee",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:"Out of Stock"
},
{
  img:"https://s3-alpha-sig.figma.com/img/9bb6/20fe/4935d74097843f377271ccf68e71ec0e?Expires=1665964800&Signature=C83yENc0n5YIkKKl-XqmCc5yoVqlx5kPKdfyTOvidXp4sVfEhcpDTlRKO7aGngn51WiwwngrWNGtJEArxtidU~dJrxQTn4ijhJwm30aSsp-Xgg0Xb62J9M5Os2GJkBiy~STQr6N5rfdA2hCeUJkn7pPBG5Ox-0uRlAsIzvidEC1ewaiVKYT~jY5QSQQrjnezz-aCNfY8c3fS2u-8X7HAe45wPRqPxXaahCgOdIh5bR-XXxtZnQwDTloOkfGIJ0Z31YoaVS8N9WrY1rOSDRUy4rLMCvNq6YWUQYLSM1phY1JRiwSK97ajrwyR4pJ1Im7fHsmp08xsaiwcLTaeociFmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"BRU",
  Description:"Bru Instant Coffee",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:"Out of Stock"
},
{
  img:"https://s3-alpha-sig.figma.com/img/3eed/5589/ad48b33e59a5a15b0463dd8c87ccba9c?Expires=1665964800&Signature=M0f4ucQcdETShYiboNb1e~UnX1bOPu~w2GgdsEzZUkFLFXGogEVRvjz2HTM-OnWkD7db6~N9RarCZdQySRS6-oW2~Ky5Eerjn8hRYrao16t9snBa8BE5nOxUx2DI1IUZVqY4SOy7Ee0k9hj1BAKh809h8woYMkjEIDbnwz9tB-RYm6AgPSXI3fU-9awRPq20vrAagJmuA~zA2aK1XyxAhS56zzIJfidk62lik2-7elYg1yJfwWXOHeTNbamPmnXnNexBDl7qlZtGaYvvQkJ5YYYwjtzXTmljRN9ntL4KsJngkBWUb2-7LaklToy6Ybayg84xYSr6Lnq9fARZb5R-0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"SURF EXCEL",
  Description:"Surf Excel Detergent Bar",
  CutPrice: "₹ 110",
  Price: "₹ 100",
  InStock:56
},
{
  img:"https://s3-alpha-sig.figma.com/img/9bb6/20fe/4935d74097843f377271ccf68e71ec0e?Expires=1665964800&Signature=C83yENc0n5YIkKKl-XqmCc5yoVqlx5kPKdfyTOvidXp4sVfEhcpDTlRKO7aGngn51WiwwngrWNGtJEArxtidU~dJrxQTn4ijhJwm30aSsp-Xgg0Xb62J9M5Os2GJkBiy~STQr6N5rfdA2hCeUJkn7pPBG5Ox-0uRlAsIzvidEC1ewaiVKYT~jY5QSQQrjnezz-aCNfY8c3fS2u-8X7HAe45wPRqPxXaahCgOdIh5bR-XXxtZnQwDTloOkfGIJ0Z31YoaVS8N9WrY1rOSDRUy4rLMCvNq6YWUQYLSM1phY1JRiwSK97ajrwyR4pJ1Im7fHsmp08xsaiwcLTaeociFmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"BRU",
  Description:"Bru Instant Coffee",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:"Out of Stock"
}, {
  img:"https://s3-alpha-sig.figma.com/img/1e48/c7a5/36b013809be782d50901aca9a2dc3931?Expires=1665964800&Signature=ZNh3pTEmhg~BnO2WiZRZ87wrCAW2bFrbJ9bBmTiZZJfcPwv2b9nukvPGi2uw589BSu~RFCVaj9E9PLPgz7~PLtH4shZ3r5CFgH3~1nTspEO3jekC9CFzKg9B7mlp90Lgnhv7fVJPbhvaCdhvnVf7xesIMchAeA6hiiIanUv31SlgUCJmzVu~oz1ahGplEpkfLn86QCLIT8MiH6xuzKWEOjZjKiaDFf9Q3hKFYMoQf2e0--EaJt4Ro2MTOYF9ukkojpnypEzRfbbAc3rEFc7X0BTaTYaBTO~f4XBx3GlB6iVccP1vPFXQU~lDY0zOG5K8bGlWsVnvV2BclWPFnyNBJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"NESTLE",
  Description:"Nestle Cerelac Wheat Ap...",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:5
},
{
  img:"https://s3-alpha-sig.figma.com/img/96cf/f0bb/d7da478f425760ecbbf63c2cd659d520?Expires=1665964800&Signature=aQZo2hvLL2Avovz-K1WjBwxBg40dzKyjHooBSS6m3--hwHlDDoC6T8oAPA~JOCRmPzyXBOc5qs3h7QloYXr9bSzRPz-w4UqHuWemcDftmagw8IWEcntuI2g-~H8waifXAEECevgX0V4LPWWhMbKmuaNAsS1QvERCjLe2yRG7yZsdQWFqPWwK1Mwongpe4iQN6sTt4ZMs58cGhkywSnj~77uxnCi9foKxW-JWIn0BUHydqxskPlSmEpH-GxmL9jz5xs80dg2nRlFWxmQVMnBWkEFiPeMKLazUvF2Grq4-ZZ-KVyiVhfbP0LnPbJV0mPGS0aDu0xJ4fUESRm5II9Xx6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"PEPSODENT",
  Description:"Pepsodent Germicheck T...",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:56
},
{
  img:"https://s3-alpha-sig.figma.com/img/d2bf/cad4/74510c7fcfcdb99b862787d6e1c8bd6c?Expires=1665964800&Signature=g1nN~Fl8a8ttgQ-TXV63LqjiZWI~~rQ8XDryfNM29CEx37G~xpMTVtT6BndIgl-Lc-lTPeW3RpLhgmlW6cS2S0E8UO8C3bQkHCV3qCcYk8~KnJjcGZMSDhKCd-0aXXUnu0sxtQC~hhT7kvbUcl8at5VqAJeZKEuN-c6HC9sP8JuraOJwf-1tkfMWL5CapGaAvnViZiPHlgBe8cRXkxpLeKPh1TTr7MAe0ARaDPiQALwMmzBK8ods056S6MONrzlGRWxYHNbhM6QEAOcsPWquAOdYl9d2ys~7P7OqU~eCrtff1oR3u45T9bZajiqj-8y5HAdblS6wZWzeV4e718Bqeg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"CADBURY",
  Description:"Cadburry Bourville Cranc...",
  CutPrice: "₹ 110",
  Price: "₹ 100",
  InStock:56
},
{
  img:"https://s3-alpha-sig.figma.com/img/3eed/5589/ad48b33e59a5a15b0463dd8c87ccba9c?Expires=1665964800&Signature=M0f4ucQcdETShYiboNb1e~UnX1bOPu~w2GgdsEzZUkFLFXGogEVRvjz2HTM-OnWkD7db6~N9RarCZdQySRS6-oW2~Ky5Eerjn8hRYrao16t9snBa8BE5nOxUx2DI1IUZVqY4SOy7Ee0k9hj1BAKh809h8woYMkjEIDbnwz9tB-RYm6AgPSXI3fU-9awRPq20vrAagJmuA~zA2aK1XyxAhS56zzIJfidk62lik2-7elYg1yJfwWXOHeTNbamPmnXnNexBDl7qlZtGaYvvQkJ5YYYwjtzXTmljRN9ntL4KsJngkBWUb2-7LaklToy6Ybayg84xYSr6Lnq9fARZb5R-0Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"SURF EXCEL",
  Description:"Surf Excel Detergent Bar",
  CutPrice: "₹ 110",
  Price: "₹ 100",
  InStock:56
},
{
  img:"https://s3-alpha-sig.figma.com/img/9bb6/20fe/4935d74097843f377271ccf68e71ec0e?Expires=1665964800&Signature=C83yENc0n5YIkKKl-XqmCc5yoVqlx5kPKdfyTOvidXp4sVfEhcpDTlRKO7aGngn51WiwwngrWNGtJEArxtidU~dJrxQTn4ijhJwm30aSsp-Xgg0Xb62J9M5Os2GJkBiy~STQr6N5rfdA2hCeUJkn7pPBG5Ox-0uRlAsIzvidEC1ewaiVKYT~jY5QSQQrjnezz-aCNfY8c3fS2u-8X7HAe45wPRqPxXaahCgOdIh5bR-XXxtZnQwDTloOkfGIJ0Z31YoaVS8N9WrY1rOSDRUy4rLMCvNq6YWUQYLSM1phY1JRiwSK97ajrwyR4pJ1Im7fHsmp08xsaiwcLTaeociFmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"BRU",
  Description:"Bru Instant Coffee",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:"Out of Stock"
}, {
  img:"https://s3-alpha-sig.figma.com/img/1e48/c7a5/36b013809be782d50901aca9a2dc3931?Expires=1665964800&Signature=ZNh3pTEmhg~BnO2WiZRZ87wrCAW2bFrbJ9bBmTiZZJfcPwv2b9nukvPGi2uw589BSu~RFCVaj9E9PLPgz7~PLtH4shZ3r5CFgH3~1nTspEO3jekC9CFzKg9B7mlp90Lgnhv7fVJPbhvaCdhvnVf7xesIMchAeA6hiiIanUv31SlgUCJmzVu~oz1ahGplEpkfLn86QCLIT8MiH6xuzKWEOjZjKiaDFf9Q3hKFYMoQf2e0--EaJt4Ro2MTOYF9ukkojpnypEzRfbbAc3rEFc7X0BTaTYaBTO~f4XBx3GlB6iVccP1vPFXQU~lDY0zOG5K8bGlWsVnvV2BclWPFnyNBJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"NESTLE",
  Description:"Nestle Cerelac Wheat Ap...",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:5
},
{
  img:"https://s3-alpha-sig.figma.com/img/96cf/f0bb/d7da478f425760ecbbf63c2cd659d520?Expires=1665964800&Signature=aQZo2hvLL2Avovz-K1WjBwxBg40dzKyjHooBSS6m3--hwHlDDoC6T8oAPA~JOCRmPzyXBOc5qs3h7QloYXr9bSzRPz-w4UqHuWemcDftmagw8IWEcntuI2g-~H8waifXAEECevgX0V4LPWWhMbKmuaNAsS1QvERCjLe2yRG7yZsdQWFqPWwK1Mwongpe4iQN6sTt4ZMs58cGhkywSnj~77uxnCi9foKxW-JWIn0BUHydqxskPlSmEpH-GxmL9jz5xs80dg2nRlFWxmQVMnBWkEFiPeMKLazUvF2Grq4-ZZ-KVyiVhfbP0LnPbJV0mPGS0aDu0xJ4fUESRm5II9Xx6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"PEPSODENT",
  Description:"Pepsodent Germicheck T...",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:56
},
{
  img:"https://s3-alpha-sig.figma.com/img/1e48/c7a5/36b013809be782d50901aca9a2dc3931?Expires=1665964800&Signature=ZNh3pTEmhg~BnO2WiZRZ87wrCAW2bFrbJ9bBmTiZZJfcPwv2b9nukvPGi2uw589BSu~RFCVaj9E9PLPgz7~PLtH4shZ3r5CFgH3~1nTspEO3jekC9CFzKg9B7mlp90Lgnhv7fVJPbhvaCdhvnVf7xesIMchAeA6hiiIanUv31SlgUCJmzVu~oz1ahGplEpkfLn86QCLIT8MiH6xuzKWEOjZjKiaDFf9Q3hKFYMoQf2e0--EaJt4Ro2MTOYF9ukkojpnypEzRfbbAc3rEFc7X0BTaTYaBTO~f4XBx3GlB6iVccP1vPFXQU~lDY0zOG5K8bGlWsVnvV2BclWPFnyNBJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  Title:"Catch",
  Description:"Catch Kasuri Methi",
  CutPrice: "₹ 100",
  Price: "₹ 100",
  InStock:56
},
]

  
  return (
    <div id="main">
      <div id="aboveSort">
        <div>Products</div>
        <button>Add Products</button>
      </div>
      <div>
        <div id="sort">
          <div>
            <div id="highlight">All</div>
            <div>Active</div>
            <div>Inactive</div>
            <div>Draft</div>
          </div>
          <div>
            <label htmlFor="">Sort :</label>
            <select name="" id="">
              <option value="">Data Created</option>
            </select>
            <span>
              {" "}
              <i class="fas fa-bars" id="bars"></i>
            </span>
            <span id="gridIcon">
              <BsGrid />
            </span>
          </div>
        </div>

        <div id="belowSort">
          <div id="searchbarWrapper">
            <span>
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" defaultValue="Bournville" placeholder="Search" />
            <span><i class="fa-solid fa-xmark"></i></span>
          </div>

          <select name="" id="">
              <option value="">Type</option>
            </select>

            <select name="" id="">
              <option value="">Category</option>
            </select>

            <select name="" id="">
              <option value="">Brands</option>
            </select>

            <select name="" id="">
              <option value="">Stock Type</option>
            </select>

            <select name="" id="">
              <option value="">Supplier</option>
            </select>

            <select name="" id="">
              <option value="">Tags</option>
            </select>

            <select name="" id="">
              <option value="">Avalability</option>
            </select>
        </div>
  <div id="products">
        {products ? products.map((e,i)=>{
          return <SingleProduct e={e} key={i}/>
        }) : "No products Available"}
        </div>
      </div>
    </div>
  );
};

export default Products;
