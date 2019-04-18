const symbolsList = [
  {
    id: "bitcoin"
  },
  {
    id: "ethereum"
  },
  {
    id: "ripple"
  },
  {
    id: "eos"
  },
  {
    id: "bitcoin-cash"
  },
  {
    id: "litecoin"
  },
  {
    id: "binancecoin"
  },
  {
    id: "cardano"
  },
  {
    id: "stellar"
  },
  {
    id: "tether"
  },
  {
    id: "tron"
  },
  {
    id: "monero"
  },
  {
    id: "dash"
  },
  {
    id: "cosmos"
  },
  {
    id: "bitcoin-cash-sv"
  },
  {
    id: "tezos"
  },
  {
    id: "iota"
  },
  {
    id: "ontology"
  },
  {
    id: "neo"
  },
  {
    id: "ethereum-classic"
  },
  {
    id: "maker"
  },
  {
    id: "nem"
  },
  {
    id: "okb"
  },
  {
    id: "zcash"
  },
  {
    id: "crypto-com-chain"
  },
  {
    id: "basic-attention-token"
  },
  {
    id: "vechain"
  },
  {
    id: "dogecoin"
  },
  {
    id: "bitcoin-gold"
  },
  {
    id: "omisego"
  },
  {
    id: "lisk"
  },
  {
    id: "waves"
  },
  {
    id: "usd-coin"
  },
  {
    id: "holotoken"
  },
  {
    id: "decred"
  },
  {
    id: "qtum"
  },
  {
    id: "nano"
  },
  {
    id: "augur"
  },
  {
    id: "bitcoin-diamond"
  },
  {
    id: "true-usd"
  },
  {
    id: "ravencoin"
  },
  {
    id: "0x"
  },
  {
    id: "zilliqa"
  },
  {
    id: "chainlink"
  },
  {
    id: "bytom"
  },
  {
    id: "iostoken"
  },
  {
    id: "icon"
  },
  {
    id: "bytecoin"
  },
  {
    id: "bitshares"
  },
  {
    id: "aelf"
  },
  {
    id: "digibyte"
  },
  {
    id: "aeternity"
  },
  {
    id: "pundi-x"
  },
  {
    id: "enjincoin"
  },
  {
    id: "verge"
  },
  {
    id: "steem"
  },
  {
    id: "siacoin"
  },
  {
    id: "komodo"
  },
  {
    id: "paxos-standard"
  },
  {
    id: "kucoin-shares"
  },
  {
    id: "stratis"
  },
  {
    id: "digitex-futures-exchange"
  },
  {
    id: "lambda"
  },
  {
    id: "theta-token"
  },
  {
    id: "status"
  },
  {
    id: "ark"
  },
  {
    id: "mixin"
  },
  {
    id: "huobi-token"
  },
  {
    id: "dai"
  },
  {
    id: "golem"
  },
  {
    id: "factom"
  },
  {
    id: "wax"
  },
  {
    id: "gxchain"
  },
  {
    id: "ardor"
  },
  {
    id: "decentraland"
  },
  {
    id: "quark-chain"
  },
  {
    id: "ultrain"
  },
  {
    id: "monaco"
  },
  {
    id: "bittorrent-2"
  },
  {
    id: "maidsafecoin"
  },
  {
    id: "hshare"
  },
  {
    id: "nebulas"
  },
  {
    id: "pivx"
  },
  {
    id: "waltonchain"
  },
  {
    id: "revain"
  },
  {
    id: "zcoin"
  },
  {
    id: "loopring"
  },
  {
    id: "aurora"
  },
  {
    id: "aion"
  },
  {
    id: "bibox-token"
  },
  {
    id: "elastos"
  },
  {
    id: "qash"
  },
  {
    id: "power-ledger"
  },
  {
    id: "populous"
  },
  {
    id: "electroneum"
  },
  {
    id: "maximine"
  },
  {
    id: "reddcoin"
  },
  {
    id: "polymath-network"
  },
  {
    id: "loom-network"
  },
  {
    id: "metaverse-etp"
  },
  {
    id: "gas"
  },
  {
    id: "bancor"
  },
  {
    id: "zencash"
  },
  {
    id: "kyber-network"
  },
  {
    id: "wanchain"
  },
  {
    id: "dent"
  },
  {
    id: "nexo"
  },
  {
    id: "neon-exchange"
  },
  {
    id: "monacoin"
  },
  {
    id: "iotex"
  },
  {
    id: "storj"
  },
  {
    id: "rif-token"
  },
  {
    id: "true-chain"
  },
  {
    id: "digixdao"
  },
  {
    id: "enigma"
  },
  {
    id: "odem"
  },
  {
    id: "celer-network"
  },
  {
    id: "cindicator"
  },
  {
    id: "tomochain"
  },
  {
    id: "iexec-rlc"
  },
  {
    id: "nuls"
  },
  {
    id: "kin"
  },
  {
    id: "nxt"
  },
  {
    id: "byteball"
  },
  {
    id: "tenx"
  },
  {
    id: "groestlcoin"
  },
  {
    id: "veritaseum"
  },
  {
    id: "funfair"
  },
  {
    id: "syscoin"
  },
  {
    id: "zb-token"
  },
  {
    id: "odyssey"
  },
  {
    id: "cybermiles"
  },
  {
    id: "libra-credit"
  },
  {
    id: "dragonchain"
  },
  {
    id: "tokenpay"
  },
  {
    id: "smartcash"
  },
  {
    id: "apollo"
  },
  {
    id: "singularitynet"
  },
  {
    id: "tokenclub"
  },
  {
    id: "kan"
  },
  {
    id: "civic"
  },
  {
    id: "clams"
  },
  {
    id: "noah-coin"
  },
  {
    id: "arcblock"
  },
  {
    id: "quant-network"
  },
  {
    id: "swarm"
  },
  {
    id: "coinbene-token"
  },
  {
    id: "proximax"
  },
  {
    id: "vertcoin"
  },
  {
    id: "metal"
  },
  {
    id: "infinity-economics"
  },
  {
    id: "etherzero"
  },
  {
    id: "particl"
  },
  {
    id: "mainframe"
  },
  {
    id: "asch"
  },
  {
    id: "neblio"
  },
  {
    id: "matrix-ai-network"
  },
  {
    id: "mithril"
  },
  {
    id: "nexus"
  },
  {
    id: "grin"
  },
  {
    id: "bit-z-token"
  },
  {
    id: "fetch-ai"
  },
  {
    id: "eidoo"
  },
  {
    id: "tokencard"
  },
  {
    id: "energi"
  },
  {
    id: "united-traders-token"
  },
  {
    id: "wagerr"
  },
  {
    id: "wabi"
  },
  {
    id: "gifto"
  },
  {
    id: "republic-protocol"
  },
  {
    id: "aragon"
  },
  {
    id: "smartmesh"
  },
  {
    id: "bankera"
  },
  {
    id: "skycoin"
  },
  {
    id: "cosmo-coin"
  },
  {
    id: "moeda-loyalty-points"
  },
  {
    id: "fantom"
  },
  {
    id: "einsteinium"
  },
  {
    id: "gochain"
  },
  {
    id: "request-network"
  },
  {
    id: "fsn"
  },
  {
    id: "crypto20"
  },
  {
    id: "mediblocx"
  },
  {
    id: "smartlands"
  },
  {
    id: "ethos"
  },
  {
    id: "gnosis"
  },
  {
    id: "bread"
  },
  {
    id: "nectar-token"
  },
  {
    id: "telcoin"
  },
  {
    id: "high-performance-blockchain"
  },
  {
    id: "eosdac"
  },
  {
    id: "cube"
  },
  {
    id: "sirin-labs-token"
  },
  {
    id: "key"
  },
  {
    id: "genesis-vision"
  },
  {
    id: "bcv"
  },
  {
    id: "hycon"
  },
  {
    id: "scroll-token"
  },
  {
    id: "ignis"
  },
  {
    id: "endor"
  },
  {
    id: "namecoin"
  },
  {
    id: "simple-token"
  },
  {
    id: "oneroot-network"
  },
  {
    id: "raiden-network"
  },
  {
    id: "utrust"
  },
  {
    id: "ripio-credit-network"
  },
  {
    id: "everex"
  },
  {
    id: "dynamic-trading-rights"
  },
  {
    id: "gemini-dollar"
  },
  {
    id: "storm"
  },
  {
    id: "streamr-datacoin"
  },
  {
    id: "nkn"
  },
  {
    id: "blocknet"
  },
  {
    id: "peercoin"
  },
  {
    id: "origintrail"
  },
  {
    id: "nav-coin"
  },
  {
    id: "iht-real-estate-protocol"
  },
  {
    id: "unlimitedip"
  },
  {
    id: "medishares"
  },
  {
    id: "adex"
  },
  {
    id: "bluzelle"
  },
  {
    id: "flo"
  },
  {
    id: "dentacoin"
  },
  {
    id: "time-new-bank"
  },
  {
    id: "thekey"
  },
  {
    id: "emercoin"
  },
  {
    id: "stasis-eurs"
  },
  {
    id: "poet"
  },
  {
    id: "lockchain"
  },
  {
    id: "credits"
  },
  {
    id: "apis"
  },
  {
    id: "crypterium"
  },
  {
    id: "ruff"
  },
  {
    id: "robotina"
  },
  {
    id: "tokenize-xchange"
  },
  {
    id: "coinus"
  },
  {
    id: "chainium"
  },
  {
    id: "rchain"
  },
  {
    id: "viacoin"
  },
  {
    id: "substratum"
  },
  {
    id: "cnn"
  },
  {
    id: "bezant"
  },
  {
    id: "deepbrain-chain"
  },
  {
    id: "salt"
  },
  {
    id: "achain"
  },
  {
    id: "clipper-coin-capital"
  },
  {
    id: "scry-info"
  },
  {
    id: "ethlend"
  },
  {
    id: "dropil"
  },
  {
    id: "ins-ecosystem"
  },
  {
    id: "pumapay"
  },
  {
    id: "ins-ecosystem"
  },
  {
    id: "dmarket"
  },
  {
    id: "edgeless"
  },
  {
    id: "t-os"
  },
  {
    id: "sonm"
  },
  {
    id: "swftcoin"
  },
  {
    id: "red-pulse"
  },
  {
    id: "digitalnote"
  },
  {
    id: "game"
  },
  {
    id: "medibloc"
  },
  {
    id: "data"
  },
  {
    id: "educare"
  },
  {
    id: "zclassic"
  },
  {
    id: "blockv"
  },
  {
    id: "foam-protocol"
  },
  {
    id: "influence-chain"
  },
  {
    id: "you-chain"
  },
  {
    id: "hydro"
  },
  {
    id: "spectrecoin"
  },
  {
    id: "alis"
  },
  {
    id: "bnktothefuture"
  },
  {
    id: "zelcash"
  },
  {
    id: "metronome"
  },
  {
    id: "stakenet"
  },
  {
    id: "bitbay"
  },
  {
    id: "ubiq"
  },
  {
    id: "singulardtv"
  },
  {
    id: "beam"
  },
  {
    id: "coss"
  },
  {
    id: "iot-chain"
  },
  {
    id: "hitchain"
  },
  {
    id: "pchain"
  },
  {
    id: "loki-network"
  },
  {
    id: "district0x"
  },
  {
    id: "btu-protocol"
  },
  {
    id: "pepecash"
  },
  {
    id: "xmax"
  },
  {
    id: "lympo"
  },
  {
    id: "hicoin"
  },
  {
    id: "aeron"
  },
  {
    id: "pillar"
  },
  {
    id: "spendcoin"
  },
  {
    id: "genaro-network"
  },
  {
    id: "medical-token-currency"
  },
  {
    id: "monetha"
  },
  {
    id: "steem-dollars"
  },
  {
    id: "poa-network"
  },
  {
    id: "universa"
  },
  {
    id: "everus"
  },
  {
    id: "kambria"
  },
  {
    id: "vite"
  },
  {
    id: "manna"
  },
  {
    id: "qlink"
  },
  {
    id: "burst"
  },
  {
    id: "jibrel"
  },
  {
    id: "dxchain"
  },
  {
    id: "xyo-network"
  },
  {
    id: "refereum"
  },
  {
    id: "canonchain"
  },
  {
    id: "bitex-global"
  },
  {
    id: "gamecredits"
  },
  {
    id: "multivac"
  },
  {
    id: "envion"
  },
  {
    id: "agrello"
  },
  {
    id: "vibe"
  },
  {
    id: "tierion"
  },
  {
    id: "internet-node-token"
  },
  {
    id: "lbry-credits"
  },
  {
    id: "wepower"
  },
  {
    id: "leocoin"
  },
  {
    id: "appcoins"
  },
  {
    id: "gulden"
  },
  {
    id: "yuan-chain-coin"
  },
  {
    id: "graft-blockchain"
  },
  {
    id: "latoken"
  },
  {
    id: "amber"
  },
  {
    id: "zrcoin"
  },
  {
    id: "mytoken"
  },
  {
    id: "all-sports"
  },
  {
    id: "ternio"
  },
  {
    id: "selfkey"
  },
  {
    id: "safeinsure"
  },
  {
    id: "zip"
  },
  {
    id: "pascalcoin"
  },
  {
    id: "fortuna"
  },
  {
    id: "gsenetwork"
  },
  {
    id: "commerceblock-token"
  },
  {
    id: "penta"
  },
  {
    id: "waves-community-token"
  },
  {
    id: "wowbit"
  },
  {
    id: "blox"
  },
  {
    id: "mobius"
  },
  {
    id: "dock"
  },
  {
    id: "airswap"
  },
  {
    id: "lunyr"
  },
  {
    id: "b2b"
  },
  {
    id: "napoleon-x"
  },
  {
    id: "bittube"
  },
  {
    id: "dero"
  },
  {
    id: "electra"
  },
  {
    id: "ulord"
  },
  {
    id: "mossland"
  },
  {
    id: "yoyow"
  },
  {
    id: "boscoin-2"
  },
  {
    id: "content-value-network"
  },
  {
    id: "bitcore"
  },
  {
    id: "decentbet"
  },
  {
    id: "daostack"
  },
  {
    id: "primecoin"
  },
  {
    id: "stacs-token"
  },
  {
    id: "plus-coin"
  },
  {
    id: "halalchain"
  },
  {
    id: "ink"
  },
  {
    id: "litex"
  },
  {
    id: "cpchain"
  },
  {
    id: "tripio"
  },
  {
    id: "bottos"
  },
  {
    id: "nix-platform"
  },
  {
    id: "blockport"
  },
  {
    id: "turtlecoin"
  },
  {
    id: "iocoin"
  },
  {
    id: "mobilego"
  },
  {
    id: "atn"
  },
  {
    id: "jex-token"
  },
  {
    id: "viberate"
  },
  {
    id: "seele"
  },
  {
    id: "maecenas"
  },
  {
    id: "bitCNY"
  },
  {
    id: "restart-energy"
  },
  {
    id: "aurora-dao"
  },
  {
    id: "nimiq-2"
  },
  {
    id: "stableusd"
  },
  {
    id: "adtoken"
  },
  {
    id: "measurable-data-token"
  },
  {
    id: "blue-whale"
  },
  {
    id: "etherparty"
  },
  {
    id: "mercury"
  },
  {
    id: "shift"
  },
  {
    id: "yee"
  },
  {
    id: "first-blood"
  },
  {
    id: "daps-token"
  },
  {
    id: "fanstime"
  },
  {
    id: "paypie"
  },
  {
    id: "nucleus-vision"
  },
  {
    id: "databroker-dao"
  },
  {
    id: "primas"
  },
  {
    id: "smartofgiving"
  },
  {
    id: "etherisc"
  },
  {
    id: "babb"
  },
  {
    id: "counterparty"
  },
  {
    id: "beekan"
  },
  {
    id: "openanx"
  },
  {
    id: "ion"
  },
  {
    id: "hut34-entropy"
  },
  {
    id: "usechain"
  },
  {
    id: "spankchain"
  },
  {
    id: "hxro"
  },
  {
    id: "legolas-exchange"
  },
  {
    id: "aidus"
  },
  {
    id: "feathercoin"
  },
  {
    id: "cloudbric"
  },
  {
    id: "potcoin"
  },
  {
    id: "darico"
  },
  {
    id: "litecoin-cash"
  },
  {
    id: "havven"
  },
  {
    id: "melon"
  },
  {
    id: "xscoin"
  },
  {
    id: "ucot"
  },
  {
    id: "deeponion"
  },
  {
    id: "grid"
  },
  {
    id: "chatcoin"
  },
  {
    id: "zmine"
  },
  {
    id: "dacc"
  },
  {
    id: "zper"
  },
  {
    id: "robet-coin"
  },
  {
    id: "suncontract"
  },
  {
    id: "phantasma"
  },
  {
    id: "hempcoin-thc"
  },
  {
    id: "cobinhood"
  },
  {
    id: "polybius"
  },
  {
    id: "polis"
  },
  {
    id: "kickico"
  },
  {
    id: "decent"
  },
  {
    id: "peerplays"
  },
  {
    id: "six-network"
  },
  {
    id: "linda"
  },
  {
    id: "blackcoin"
  },
  {
    id: "baasid"
  },
  {
    id: "0chain"
  },
  {
    id: "beetle-coin"
  },
  {
    id: "digital-ticks"
  },
  {
    id: "unikoin-gold"
  },
  {
    id: "coinsuper-ecosystem-network"
  },
  {
    id: "blockmason-credit-protocol"
  },
  {
    id: "abcc-token"
  },
  {
    id: "qunqun"
  },
  {
    id: "spacechain-erc-20"
  },
  {
    id: "apex"
  },
  {
    id: "dimecoin"
  },
  {
    id: "wings"
  },
  {
    id: "contentbox"
  },
  {
    id: "intelligent-investment-chain"
  },
  {
    id: "ovcode"
  },
  {
    id: "edrcoin"
  },
  {
    id: "freyrchain"
  },
  {
    id: "life"
  },
  {
    id: "remme"
  },
  {
    id: "get-token"
  },
  {
    id: "vipstarcoin"
  },
  {
    id: "loyalcoin"
  },
  {
    id: "global-currency-reserve"
  },
  {
    id: "zeepin"
  },
  {
    id: "veil"
  },
  {
    id: "bhpc"
  },
  {
    id: "airbloc-protocol"
  },
  {
    id: "vericoin"
  },
  {
    id: "paccoin"
  },
  {
    id: "xtrabytes"
  },
  {
    id: "delphy"
  },
  {
    id: "egretia"
  },
  {
    id: "thegcccoin"
  },
  {
    id: "te-food"
  },
  {
    id: "crowdcoin"
  },
  {
    id: "propy"
  },
  {
    id: "app-alliance-association"
  },
  {
    id: "digix-gold"
  },
  {
    id: "howdoo"
  },
  {
    id: "hashgard"
  },
  {
    id: "edenchain"
  },
  {
    id: "colossuscoinxt"
  },
  {
    id: "naga"
  },
  {
    id: "molecular-future"
  },
  {
    id: "ac3"
  },
  {
    id: "sentinel-protocol"
  },
  {
    id: "divi"
  },
  {
    id: "tokes"
  },
  {
    id: "expanse"
  },
  {
    id: "sakura-bloom"
  },
  {
    id: "nexty"
  },
  {
    id: "credo"
  },
  {
    id: "zeusshield"
  },
  {
    id: "ecc"
  },
  {
    id: "ebcoin"
  },
  {
    id: "blackmoon-crypto"
  },
  {
    id: "crown"
  },
  {
    id: "policypal"
  },
  {
    id: "ormeuscoin"
  },
  {
    id: "wearesatoshi"
  },
  {
    id: "concierge-io"
  },
  {
    id: "zebi"
  },
  {
    id: "twist"
  },
  {
    id: "gene-source-code-token"
  },
  {
    id: "haven"
  },
  {
    id: "skrumble-network"
  },
  {
    id: "carvertical"
  },
  {
    id: "qntu"
  },
  {
    id: "lendingblock"
  },
  {
    id: "bloom"
  },
  {
    id: "paragon"
  },
  {
    id: "cashaa"
  },
  {
    id: "hyperion"
  },
  {
    id: "lamden"
  },
  {
    id: "decision-token"
  },
  {
    id: "hive"
  },
  {
    id: "trinity-network-credit"
  },
  {
    id: "switcheo"
  },
  {
    id: "linkeye"
  },
  {
    id: "dadi"
  },
  {
    id: "mooncoin"
  },
  {
    id: "leverj"
  },
  {
    id: "box-token"
  },
  {
    id: "blockcdn"
  },
  {
    id: "educoin"
  },
  {
    id: "stealthcoin"
  },
  {
    id: "pandacoin"
  },
  {
    id: "adamant-messenger"
  },
  {
    id: "lightchain"
  },
  {
    id: "catex-token"
  },
  {
    id: "slate"
  },
  {
    id: "smartshare"
  },
  {
    id: "1irstcoin"
  },
  {
    id: "gmb"
  },
  {
    id: "lto-network"
  },
  {
    id: "unibright"
  },
  {
    id: "fintrux"
  },
  {
    id: "wibson"
  },
  {
    id: "coinpoker"
  },
  {
    id: "polyswarm"
  },
  {
    id: "eurocoinpay"
  },
  {
    id: "otocash"
  },
  {
    id: "gridcoin-research"
  },
  {
    id: "phore"
  },
  {
    id: "nos"
  },
  {
    id: "daex"
  },
  {
    id: "databits"
  },
  {
    id: "evencoin"
  },
  {
    id: "neumark"
  },
  {
    id: "vegawallet-token"
  },
  {
    id: "open-platform"
  },
  {
    id: "bismuth"
  },
  {
    id: "gincoin"
  },
  {
    id: "covesting"
  },
  {
    id: "cloakcoin"
  },
  {
    id: "modum"
  },
  {
    id: "diamond"
  },
  {
    id: "neurotoken"
  },
  {
    id: "nanjcoin"
  },
  {
    id: "dipnet"
  },
  {
    id: "thingsoperatingsystem"
  },
  {
    id: "myce"
  },
  {
    id: "sixdomainchain"
  },
  {
    id: "experience-chain"
  },
  {
    id: "myriadcoin"
  },
  {
    id: "cvcoin"
  },
  {
    id: "goldenfever"
  },
  {
    id: "luxcoin"
  },
  {
    id: "semux"
  },
  {
    id: "palletone"
  },
  {
    id: "radium"
  },
  {
    id: "change"
  },
  {
    id: "aidcoin"
  },
  {
    id: "xaurum"
  },
  {
    id: "cybervein"
  },
  {
    id: "vinchain"
  },
  {
    id: "bmax"
  },
  {
    id: "pindex"
  },
  {
    id: "suqa"
  },
  {
    id: "zen-protocol"
  },
  {
    id: "repme"
  },
  {
    id: "dagger"
  },
  {
    id: "ai-doctor"
  },
  {
    id: "beat"
  },
  {
    id: "pibble"
  },
  {
    id: "xp"
  },
  {
    id: "grearn"
  },
  {
    id: "vexanium"
  },
  {
    id: "qchi"
  },
  {
    id: "axe"
  },
  {
    id: "liquidity-network"
  },
  {
    id: "pdx"
  },
  {
    id: "fedoracoin"
  },
  {
    id: "elastic"
  },
  {
    id: "mtc-mesh-network"
  },
  {
    id: "horuspay"
  },
  {
    id: "monetaryunit"
  },
  {
    id: "domraider"
  },
  {
    id: "medicalchain"
  },
  {
    id: "moneytoken"
  },
  {
    id: "meritcoins"
  },
  {
    id: "solarcoin"
  },
  {
    id: "comsa"
  },
  {
    id: "morpheus-labs"
  },
  {
    id: "distributed-credit-chain"
  },
  {
    id: "rotharium"
  },
  {
    id: "acute-angle-cloud"
  },
  {
    id: "sophiatx"
  },
  {
    id: "eterbase"
  },
  {
    id: "bitcoin-green"
  },
  {
    id: "c3-wallet"
  },
  {
    id: "olive"
  },
  {
    id: "ipchain"
  },
  {
    id: "tokenomy"
  },
  {
    id: "qredit"
  },
  {
    id: "nebula-ai"
  },
  {
    id: "insurchain"
  },
  {
    id: "zap"
  },
  {
    id: "neurochain"
  },
  {
    id: "uquid-coin"
  },
  {
    id: "rate3"
  },
  {
    id: "bitmart-token"
  },
  {
    id: "webdollar"
  },
  {
    id: "revolutionvr"
  },
  {
    id: "lina"
  },
  {
    id: "covalent"
  },
  {
    id: "dacsee"
  },
  {
    id: "cardstack"
  },
  {
    id: "playchip"
  },
  {
    id: "adshares"
  },
  {
    id: "waykichain"
  },
  {
    id: "taas"
  },
  {
    id: "consensus"
  },
  {
    id: "verasity"
  },
  {
    id: "spectre-utility-token"
  },
  {
    id: "soarcoin"
  },
  {
    id: "infinitecoin"
  },
  {
    id: "mediex"
  },
  {
    id: "axpire"
  },
  {
    id: "sentinel-group"
  },
  {
    id: "quark"
  },
  {
    id: "omni"
  },
  {
    id: "stk"
  },
  {
    id: "coinex-token"
  },
  {
    id: "winding-tree"
  },
  {
    id: "humaniq"
  },
  {
    id: "marinecoin"
  },
  {
    id: "aventus"
  },
  {
    id: "fuzex"
  },
  {
    id: "cryptoharbor"
  },
  {
    id: "sharder-protocol"
  },
  {
    id: "hydro-protocol"
  },
  {
    id: "rubycoin"
  },
  {
    id: "sport-and-leisure"
  },
  {
    id: "bitcoin-private"
  },
  {
    id: "the-abyss"
  },
  {
    id: "etheroll"
  },
  {
    id: "ugchain"
  },
  {
    id: "bankex"
  },
  {
    id: "sphere"
  },
  {
    id: "dimcoin"
  },
  {
    id: "synereo"
  },
  {
    id: "crowd-machine"
  },
  {
    id: "credit-tag-chain"
  },
  {
    id: "alqo"
  },
  {
    id: "utrum"
  },
  {
    id: "friendz"
  },
  {
    id: "merculet"
  },
  {
    id: "omnitude"
  },
  {
    id: "abo"
  },
  {
    id: "safe-coin-2"
  },
  {
    id: "yggdrash"
  },
  {
    id: "fnkos"
  },
  {
    id: "electrify-asia"
  },
  {
    id: "datum"
  },
  {
    id: "social-media-coin"
  },
  {
    id: "exrnchain"
  },
  {
    id: "fairgame"
  },
  {
    id: "earthcoin"
  },
  {
    id: "presearch"
  },
  {
    id: "curecoin"
  },
  {
    id: "peculium"
  },
  {
    id: "sureremit"
  },
  {
    id: "snetwork"
  },
  {
    id: "bgogo"
  },
  {
    id: "qbao"
  },
  {
    id: "paypex"
  },
  {
    id: "portal"
  },
  {
    id: "bitdice"
  },
  {
    id: "ultiledger"
  },
  {
    id: "spindle"
  },
  {
    id: "project-districts"
  },
  {
    id: "privatix"
  },
  {
    id: "stronghands"
  },
  {
    id: "boxx"
  },
  {
    id: "storiqa"
  },
  {
    id: "transfercoin"
  },
  {
    id: "cannabiscoin"
  },
  {
    id: "linfinity"
  },
  {
    id: "farmatrust"
  },
  {
    id: "winco"
  },
  {
    id: "masari"
  },
  {
    id: "spacechain"
  },
  {
    id: "ubex"
  },
  {
    id: "hi-mutual-society"
  },
  {
    id: "circuits-of-value"
  },
  {
    id: "carlive-chain"
  },
  {
    id: "mysterium"
  },
  {
    id: "ivy"
  },
  {
    id: "cryptaldash"
  },
  {
    id: "vites"
  },
  {
    id: "karma-coin"
  },
  {
    id: "sentinel-chain"
  },
  {
    id: "selfsell"
  },
  {
    id: "chronobank"
  },
  {
    id: "bitsend"
  },
  {
    id: "bitcar"
  },
  {
    id: "effect-ai"
  },
  {
    id: "breezecoin"
  },
  {
    id: "ceek"
  },
  {
    id: "matchpool"
  },
  {
    id: "wetrust"
  },
  {
    id: "vectorspace"
  },
  {
    id: "cargox"
  },
  {
    id: "echolink"
  },
  {
    id: "dnotes"
  },
  {
    id: "hollywoodcoin"
  },
  {
    id: "pundi-x-nem"
  },
  {
    id: "traxia"
  },
  {
    id: "rightmesh"
  },
  {
    id: "cai-token"
  },
  {
    id: "espers"
  },
  {
    id: "stox"
  },
  {
    id: "copytrack"
  },
  {
    id: "lux"
  },
  {
    id: "joyso"
  },
  {
    id: "carboneum"
  },
  {
    id: "cappasity"
  },
  {
    id: "electronicgulden"
  },
  {
    id: "social-lending-token"
  },
  {
    id: "shopzcoin"
  },
  {
    id: "energo"
  },
  {
    id: "insurex"
  },
  {
    id: "scanetchain"
  },
  {
    id: "coinlion"
  },
  {
    id: "aichain"
  },
  {
    id: "bithereum"
  },
  {
    id: "cashbet-coin"
  },
  {
    id: "okcash"
  },
  {
    id: "globalboost"
  },
  {
    id: "likecoin"
  }
];
export default symbolsList;
