import React, { useState, useEffect } from "react";
import { GiSpeedometer } from "react-icons/gi";
import { CgArrowsMergeAltH } from "react-icons/cg";
import { GiCircularSawblade } from "react-icons/gi";
import { GiWoodBeam } from "react-icons/gi";
import { BiArea } from "react-icons/bi";
import FormInputComponent from "../sagblad/FormInputComponent";
import sagblader from "../../data/sagblader";
import Head from "next/head";
import InfoContainerComponent from "../sagblad/InfoContainerComponent";

const SagbladMainPage = () => {
  const [pi, setPi] = useState(3.14);
  const [diameter, setDiameter] = useState(445);
  const [z, setZ] = useState(36);
  const [matehastighet, setMatehastighet] = useState(80);
  const [turtall, setTurtall] = useState(3100);
  const [brgMatehastighet, setBrgMatehastighet] = useState(100);
  const [turtallZ, setTurtallZ] = useState(3100);
  const [skjærehastighet, setSkjærehastighet] = useState();
  const [feedTooth, setFeedTooth] = useState();

  const [update, setUpdate] = useState(false);

  // Sponfyllingsgrad

  const [flisafaktor, setFlisafaktor] = useState(3);
  const [sponfyllingsGrad, setSponfyllingsGrad] = useState();
  const [skurHøyde, setSkurHøyde] = useState(75);
  const [tannlukeAreal, setTannlukeAreal] = useState(206);
  const [sawBladeImg, setSawBladeImg] = useState(
    "https://lh3.googleusercontent.com/pw/AIL4fc9nmANi8zHrU6KV03aLi1iMUO7robCHKSJw8BB0o1U7SR6PnczrnuXdmOdEuxpB0dfPoWRPhoR83-ekKzCRjjNS92mmQSiBWm5PEEWkSlqkpCeg5y0AkuG81RTLHG5tIx3eDEkOUWv-Ma9e6UMGk3PotYcOHvze_UecYszS9xkoIEHeTZz97W4XuweueMphU-HwAE6DZMwwIio0uJHG-dcHiplmX-VmRPwpPGqqOSD9EKBOuKT5W4XQzWR0wAI81wKoBo1WdfQObPMz6tdviQ3xpQinobqv34fGRMw3nfvZ6tfKsU75n_WumpRLISY7kM83Fmjurkc2EvInjS2a3H_0PIw1W_PR89WPDPeVcGA4bW23XeCTtkMBtsMIlWyU3NbPinWyRj8VzWh5UNi1sb7QeJbEpTx8r7hTTj54JXYPnGgvbSM3tYiq7wDIK1VcslwUobiqxEBlYJfEh32vMGO6-CS9GfiI7pI_Mj41QFtSLtR21xia2JJOn24usvy0ZS9Zr9AcaO3XqWx6ddxe7rO-BAKA50pwi9_qHM_L9QaaZfneygy8RsnziRV47Ge3rpLSZ5pCtA9Lecn0A02Q8WJUkV83FQA8JLLkgq6GM9itlA_ydPPKI_Z4eAEqVjj0aUMtLs0AscHMfWMNYbsBXVm07oQNdUCP1oA7hhmgNIV7ikIvGkku0viRE6ju2kLKQpch85WeS07P4WRlsjTPDgXR--eX-bQdRpF33Vb90d6PbBTpGHy2FDq_8XtQUV4L2t3_MkL5DfzbugsFrDEz5nJ_AwIexoCSn9veDNg_oPs35LWW4quVhAtnOg692_Pt6FS7I86N9DnCd1wdgHI8A-cL9dJ91rowuwPyO3KAIAff0bgpLRtU0i5h2SMDxLTLZR-XiAuRnEpKITUbs56wRw=w1107-h1080-s-no?authuser=0"
  );

  // useEffect(() => {
  //   setTimeout(() => {
  //     setBladeHeader("Egendefinert");
  //   }, 500);
  // }, [diameter, turtall, z, skurHøyde, tannlukeAreal]);

  useEffect(() => {
    setBrgMatehastighet(matehastighet * 1000);
    setTimeout(() => {
      setUpdate(!update);
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matehastighet]);

  useEffect(() => {
    setSkjærehastighet((pi * diameter * turtall) / (60 * 1000));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diameter, turtall, update]);

  useEffect(() => {
    setTurtallZ(turtall * z);
  }, [diameter, turtall, matehastighet, z, update]);

  useEffect(() => {
    setFeedTooth((Number(brgMatehastighet) / Number(turtallZ)).toFixed(2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diameter, turtall, matehastighet, z, turtallZ, update]);

  useEffect(() => {
    setSponfyllingsGrad((feedTooth * skurHøyde * flisafaktor) / tannlukeAreal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedTooth, skurHøyde, tannlukeAreal]);

  const [selectVal, setSelectVal] = useState("mkv445");
  const [bladeHeader, setBladeHeader] = useState();

  useEffect(() => {
    if (selectVal === "mkv510") {
      setDiameter(sagblader.mkv510.diameter);
      setZ(sagblader.mkv510.z);
      setTurtall(sagblader.mkv510.rpm);
      setTannlukeAreal(sagblader.mkv510.areal);
      setSkurHøyde(sagblader.mkv510.skurhøyde);
      setBladeHeader("MKV 4,6");
      setMatehastighet(sagblader.mkv510.speed);
      setSawBladeImg(
        "https://lh3.googleusercontent.com/pw/AIL4fc_X5cV5SCwgP7qRN7_GA3cZUIfFJrwFBc3bl4tkTGBqeog47nmSIbJQPi1nWYopcFy2uREFTydUfDhpVIcNhoWGjXnWBXVN5Q-Npgr-hTzW6rl-C1s-c2Kynii6WSrVsbA5hgVz9qw7V-OMpO6L-ahu8P9KJN0lB9H0gbhyfEFw5jvuslIk1vpQV6pVN-Pot6jbvkLo4KPtBsgUTpiIItAD25IMceX10uz0G_zZpJ5NKWIey-_vLxB3bE3K2lRl9_JeawaJ76j_dzyzW8Fltk0AXo9-V4M5ERE35IJxcl81RofbXUDiL2K8KPTIBBn0_pcOdwjBt0VqjpI54Kl-MP3kft8g0jL7pccnFpO8ffHjymt2VRvr4Dp1q3bRogTy2vbzBum-o-jYlfCaFiUPLgrFccZt4ko0D2NDmHa3hDAAs2SlaTIBhgLGpfuFn5G_ezSywtBaM0ltliWk_MYVxJAq-l_AjheNedh_wzGbCv2AKzAwOOTeT4zF8rwyEtJmIhCq6L-p1NK2ZripBzJHb5H43kALd5bBTT_6uzdj5u26huzwBr401Dw0jufZ60S4-zgUBsKPgzlpiy0SW3Ih6i9SmtTuk1qsmcgMFmJ5YRxUvh3meAlqxRXaEeVlndts-oCCi1b3MLsjjvAzQFocANCvydREQyWEGvrLVABX-AhDIfSyDyEP4RIWmp0bN2dM6dVuz_3GOvTaahK5WyMNFPp1ao9ZrUBajMLe7bKZFvRkpisUc48QaITQlmcUCKeYrfNDYMucGgsXeO2wuzcD-SBFX2BKI-mlROtDUStTERuxeVCHmHWLlPBeNk4z9WIZ6I-LnhU02igE5ePyaW-o4TnwcnjWSpTRyJs4n4uNFmmFpgTMXp9VnD0HgtEn7NvgSJSeuXinCNXO0669JC27nA=w1094-h1080-s-no?authuser=0"
      );
    } else if (selectVal === "mkv445") {
      setDiameter(sagblader.mkv445.diameter);
      setZ(sagblader.mkv445.z);
      setTurtall(sagblader.mkv445.rpm);
      setTannlukeAreal(sagblader.mkv445.areal);
      setSkurHøyde(sagblader.mkv445.skurhøyde);
      setBladeHeader("MKV 4,2");
      setMatehastighet(sagblader.mkv445.speed);
      setSawBladeImg(
        "https://lh3.googleusercontent.com/pw/AIL4fc9nmANi8zHrU6KV03aLi1iMUO7robCHKSJw8BB0o1U7SR6PnczrnuXdmOdEuxpB0dfPoWRPhoR83-ekKzCRjjNS92mmQSiBWm5PEEWkSlqkpCeg5y0AkuG81RTLHG5tIx3eDEkOUWv-Ma9e6UMGk3PotYcOHvze_UecYszS9xkoIEHeTZz97W4XuweueMphU-HwAE6DZMwwIio0uJHG-dcHiplmX-VmRPwpPGqqOSD9EKBOuKT5W4XQzWR0wAI81wKoBo1WdfQObPMz6tdviQ3xpQinobqv34fGRMw3nfvZ6tfKsU75n_WumpRLISY7kM83Fmjurkc2EvInjS2a3H_0PIw1W_PR89WPDPeVcGA4bW23XeCTtkMBtsMIlWyU3NbPinWyRj8VzWh5UNi1sb7QeJbEpTx8r7hTTj54JXYPnGgvbSM3tYiq7wDIK1VcslwUobiqxEBlYJfEh32vMGO6-CS9GfiI7pI_Mj41QFtSLtR21xia2JJOn24usvy0ZS9Zr9AcaO3XqWx6ddxe7rO-BAKA50pwi9_qHM_L9QaaZfneygy8RsnziRV47Ge3rpLSZ5pCtA9Lecn0A02Q8WJUkV83FQA8JLLkgq6GM9itlA_ydPPKI_Z4eAEqVjj0aUMtLs0AscHMfWMNYbsBXVm07oQNdUCP1oA7hhmgNIV7ikIvGkku0viRE6ju2kLKQpch85WeS07P4WRlsjTPDgXR--eX-bQdRpF33Vb90d6PbBTpGHy2FDq_8XtQUV4L2t3_MkL5DfzbugsFrDEz5nJ_AwIexoCSn9veDNg_oPs35LWW4quVhAtnOg692_Pt6FS7I86N9DnCd1wdgHI8A-cL9dJ91rowuwPyO3KAIAff0bgpLRtU0i5h2SMDxLTLZR-XiAuRnEpKITUbs56wRw=w1107-h1080-s-no?authuser=0"
      );
    } else if (selectVal === "vs66flens") {
      setDiameter(sagblader.vs66flens.diameter);
      setZ(sagblader.vs66flens.z);
      setTurtall(sagblader.vs66flens.rpm);
      setTannlukeAreal(sagblader.vs66flens.areal);
      setSkurHøyde(sagblader.vs66flens.skurhøyde);
      setBladeHeader("VS66 flensblad");
      setMatehastighet(sagblader.vs66flens.speed);
      setSawBladeImg(
        "https://lh3.googleusercontent.com/pw/AIL4fc872BEi4rlPG9ldtEweD79TKnb4N5nBFl0GxGPysfimTNAplfoD6k0V39cinMgy-ChRErThXyXv-K4YKKPIccrBacPHr-VI449nTcVTpA3H1_cR6WYGJOQn3yUSByPb-OJB5w3II9Nj5XZEYuvztRPoGrUWMHxjXqejC3MW8OU5TrNtiOXIEXzyNp0jiC1-RFNAEsH8Z8Nn5zo3jpzrO9HkOg4fMNoYva2ZaaAj62cGpXHgPJzWnwS_cskSbRRCqPr23UMKJFMPL7XgTaBkjMBz9-YcRf0q9oaswFZB8r6x0fm3ghvzA20cfU9Scn8FoMaQO4F5NZwbfnZEylWnjcsmDvTQD6SFGgTdmIvaNhaiZJCv5dyd5JV9VaiNDolqcJOo1IT6ObWtZ3eVb3p3UsWiu4m1XNvZfRGa9LNUidXiu1axKwMR3VMpTW2aV3vs6s0w8ctgyi7euUjDMP5wF-OLAgQON4tqNVjxOlUrkmuq9Iv5WvbGCFkQSf1kw14ZAcqUyB8LUjuGyPyY74rTuxmY1uSBeDL5nNZERRW8ynyqlIE6s5Tp5okMdeEvEmIq2ZgO4lK-yKox4aWgKOBT1f9eEmA0woNWXVBI2xgmP9jDkFA1czzE8b2ut6qOtdK2QkXQhYI20TP_tDoHpHz_BNuHslml7utSdVC1US-xKc8DUMPD2eo0lWeb2cuwhwDNlVF7IicDfZ1ky_Vm3PwzwytaL4l1q872_tYX-OfGPjLQ75_9ifST2PG7B7CLthYDcy6Yy-OkANvWdK9vRW_fnrOqSsFwGDUGe6JuTKzywxuqXMf1DikZJhjXZrjuv_3JL-k3C-2ihYeiq-J3ayefuXqjaRo7G9Th5YUlyyCm2MF4VzgA0SbhxAvq4JtEek_h_r4qNPnSEIlWGYad5rlZ1w=w1104-h1080-s-no?authuser=0"
      );
    } else if (selectVal === "trimmer500") {
      setDiameter(sagblader.trimmer500.diameter);
      setZ(sagblader.trimmer500.z);
      setTurtall(sagblader.trimmer500.rpm);
      setTannlukeAreal(sagblader.trimmer500.areal);
      setSkurHøyde(sagblader.trimmer500.skurhøyde);
      setBladeHeader("Trimmer 500 JV");
      setMatehastighet(sagblader.trimmer500.speed);
      setSawBladeImg(
        "https://lh3.googleusercontent.com/pw/AIL4fc98Nf5Cyraz53eReDp2evKB0FxsWz_FmJsKntBZ-mo0I9F1gH22ij8412zafwfP1jVdRmsBwDQpbR1yq5a0Pd6w5dnRfhNxZm8VLujnQ0CPhvGtTalLUx1DgtT5CHbFpVH6KlXZgkEXfrsarbHVc6DRWjvpjXQkUJcFjjsDBo76THFII8V-vdhWYFIkst7gy1ZK0Y2fzwLVeQBxrJa67jX_-j2noXULsHOfJqejeavgTCO2cK2MkH6gS8_jV4lvQJthGd2RFqlUA4P4YvOV_pDH1Mm7_s9BHyjLJ_hFjSLl1cugReH_GgM3nMS6VFYRyf-UdxJbv5ymI9aNUwcyUVqe_Ak5iutfU89bNsnXistbjnG7vy-xV65To0ttMPlf1aReFqIsvM5su3oZpy3D53IoBQR5DHZzf_odoOg2CXV99REOMKNnHQbx-VWDV3S_yk6wzy4gnRdo0m_LliUwGdCeS1P8hN_pyhJhFV7rfZJujTwF0huMpIoLh2v_DPjqxZv2P-QB4gOVvzgiNE0Ky8pCY7Vo2wbrEBcFFqvfM53slNavJ44Jujh59EiKYAs5-1esvAMM3MpgLPdQkSz-xmEijFXqC5NF7BmRzcBI_zmD2wPOrkRWfPmLDuA2MscPPh-CGaGTaFdyjHabb9A4RSe1rc5GKhElPjEECP4t6pxz9tO7TQvKRI7dFq4dbnz447ee9WdnGlHhrYiQj56lakCUAMhV9HAOlrh13vobWTBdAk8r1yPMhqEOXVqsUtm_7iB8FBk6x8SUubCSbTtU55GUT20cvIfzH3acQohkUvmT5jozURjCEoY5DD1JP7CYbv2Dxqi2EpfSnh2fSYOL9U4cQ8GcRJPnQwBigxWEm9knLxWVDsS6U15X1eKW_Q8glddQvgyADUQ8W-CTpCx7ew=w1085-h1080-s-no?authuser=0"
      );
    } else if (selectVal === "vs66") {
      setDiameter(sagblader.vs66.diameter);
      setZ(sagblader.vs66.z);
      setTurtall(sagblader.vs66.rpm);
      setTannlukeAreal(sagblader.vs66.areal);
      setSkurHøyde(sagblader.vs66.skurhøyde);
      setMatehastighet(sagblader.vs66.speed);
      setBladeHeader("VS66");
      setSawBladeImg(
        "https://lh3.googleusercontent.com/pw/AIL4fc_uVWNJITSKYqkGXpugO8cZCpc3p4mFQpUF0dLwZJ02x1_ZD-v5aK8mV1QQuOsY1eSbKlH7cunzknoNV_EvXzI-ksYsLAZVqTC9mhL_ijsYSuhlhzm7cEkhYCy7xQdD2jomBjWO78vYifDvyedd0XkCj0IIFBf0w6P5Dlgg8mwm59iXaPC6TQP-E-x4FLpqFJv55pSq49QbSWjB_oOxgCcH0WUVtKXIZf8EEhTQ_zxoYV7tnDBUmANtIc0nW2g1qWhhKbUsvWHS12xWVri-yFthEviC6ZteYJBiYCHO2NiC8vZ1I5_vjGvR7vIL-n3YEVyCpBAC8LSM7UKWbohFFAaz43v1crW0qMNtqAo-b5FbrZu6heyyhnbsAcHdMAuq6d3c_pdueNCpWIpALDH_1g915vV5IxMSIDESDc4Mcgk7p5ATQcApHXFfn6DqUniWUhgIeb1jEwCj_aFLDZolDvnmt_2Y_mmOcLGETcTajd1DEIBWdYIf-SM3u7sInGm3H5J0AKEISbPVJtqE6mgiZ8Z2l4tFv-KK9Nu6APFN1ZwShm6mLnpMf3PcHy5ExCwY9z_v8PYCG6H06mIfjKPGnsNbFDPh0ogBX7ADKp8g6-nKTHk_s4E2VqGvvOio4Y_FJGNUc840BCJUP-Udgg4m_6Tv_yYXpfJ1eGZyUi0m3nspH0cdMZYPkUQ1zMXbyxm8NB5ExiUNFtMC7eWMA3Nun7nSAfgBxQK9VCHb6Zpa2R6ZeyDR-FBzRp3nskhRmhh3fTIIreVq0ggWFP3ffKGM51xG-ORt8AFcRzSLGFXZchlu7Q75gRzupppyA0RR0Sp_qWRUxs8JexaN1y-ef_DXpXdwdHJFErHY6yV26y0RW39SspyJoo1KVXLg3MkbWwwuQMeHgoWFPnQjqS33SLTpkQ=w1099-h1080-s-no?authuser=0"
      );
    } else if (selectVal === "trimmerrasort") {
      setDiameter(sagblader.trimmerrasort.diameter);
      setZ(sagblader.trimmerrasort.z);
      setTurtall(sagblader.trimmerrasort.rpm);
      setTannlukeAreal(sagblader.trimmerrasort.areal);
      setSkurHøyde(sagblader.trimmerrasort.skurhøyde);
      setMatehastighet(sagblader.trimmerrasort.speed);
      setBladeHeader("Trimmer råsort");
      setSawBladeImg(
        "https://lh3.googleusercontent.com/pw/AIL4fc98Nf5Cyraz53eReDp2evKB0FxsWz_FmJsKntBZ-mo0I9F1gH22ij8412zafwfP1jVdRmsBwDQpbR1yq5a0Pd6w5dnRfhNxZm8VLujnQ0CPhvGtTalLUx1DgtT5CHbFpVH6KlXZgkEXfrsarbHVc6DRWjvpjXQkUJcFjjsDBo76THFII8V-vdhWYFIkst7gy1ZK0Y2fzwLVeQBxrJa67jX_-j2noXULsHOfJqejeavgTCO2cK2MkH6gS8_jV4lvQJthGd2RFqlUA4P4YvOV_pDH1Mm7_s9BHyjLJ_hFjSLl1cugReH_GgM3nMS6VFYRyf-UdxJbv5ymI9aNUwcyUVqe_Ak5iutfU89bNsnXistbjnG7vy-xV65To0ttMPlf1aReFqIsvM5su3oZpy3D53IoBQR5DHZzf_odoOg2CXV99REOMKNnHQbx-VWDV3S_yk6wzy4gnRdo0m_LliUwGdCeS1P8hN_pyhJhFV7rfZJujTwF0huMpIoLh2v_DPjqxZv2P-QB4gOVvzgiNE0Ky8pCY7Vo2wbrEBcFFqvfM53slNavJ44Jujh59EiKYAs5-1esvAMM3MpgLPdQkSz-xmEijFXqC5NF7BmRzcBI_zmD2wPOrkRWfPmLDuA2MscPPh-CGaGTaFdyjHabb9A4RSe1rc5GKhElPjEECP4t6pxz9tO7TQvKRI7dFq4dbnz447ee9WdnGlHhrYiQj56lakCUAMhV9HAOlrh13vobWTBdAk8r1yPMhqEOXVqsUtm_7iB8FBk6x8SUubCSbTtU55GUT20cvIfzH3acQohkUvmT5jozURjCEoY5DD1JP7CYbv2Dxqi2EpfSnh2fSYOL9U4cQ8GcRJPnQwBigxWEm9knLxWVDsS6U15X1eKW_Q8glddQvgyADUQ8W-CTpCx7ew=w1085-h1080-s-no?authuser=0"
      );
    } else if (selectVal === "eksakt") {
      setDiameter(sagblader.eksakt.diameter);
      setZ(sagblader.eksakt.z);
      setTurtall(sagblader.eksakt.rpm);
      setTannlukeAreal(sagblader.eksakt.areal);
      setSkurHøyde(sagblader.eksakt.skurhøyde);
      setMatehastighet(sagblader.eksakt.speed);
      setBladeHeader("Eksaktkappe JV");
      setSawBladeImg(
        "https://lh3.googleusercontent.com/pw/AIL4fc98Nf5Cyraz53eReDp2evKB0FxsWz_FmJsKntBZ-mo0I9F1gH22ij8412zafwfP1jVdRmsBwDQpbR1yq5a0Pd6w5dnRfhNxZm8VLujnQ0CPhvGtTalLUx1DgtT5CHbFpVH6KlXZgkEXfrsarbHVc6DRWjvpjXQkUJcFjjsDBo76THFII8V-vdhWYFIkst7gy1ZK0Y2fzwLVeQBxrJa67jX_-j2noXULsHOfJqejeavgTCO2cK2MkH6gS8_jV4lvQJthGd2RFqlUA4P4YvOV_pDH1Mm7_s9BHyjLJ_hFjSLl1cugReH_GgM3nMS6VFYRyf-UdxJbv5ymI9aNUwcyUVqe_Ak5iutfU89bNsnXistbjnG7vy-xV65To0ttMPlf1aReFqIsvM5su3oZpy3D53IoBQR5DHZzf_odoOg2CXV99REOMKNnHQbx-VWDV3S_yk6wzy4gnRdo0m_LliUwGdCeS1P8hN_pyhJhFV7rfZJujTwF0huMpIoLh2v_DPjqxZv2P-QB4gOVvzgiNE0Ky8pCY7Vo2wbrEBcFFqvfM53slNavJ44Jujh59EiKYAs5-1esvAMM3MpgLPdQkSz-xmEijFXqC5NF7BmRzcBI_zmD2wPOrkRWfPmLDuA2MscPPh-CGaGTaFdyjHabb9A4RSe1rc5GKhElPjEECP4t6pxz9tO7TQvKRI7dFq4dbnz447ee9WdnGlHhrYiQj56lakCUAMhV9HAOlrh13vobWTBdAk8r1yPMhqEOXVqsUtm_7iB8FBk6x8SUubCSbTtU55GUT20cvIfzH3acQohkUvmT5jozURjCEoY5DD1JP7CYbv2Dxqi2EpfSnh2fSYOL9U4cQ8GcRJPnQwBigxWEm9knLxWVDsS6U15X1eKW_Q8glddQvgyADUQ8W-CTpCx7ew=w1085-h1080-s-no?authuser=0"
      );
    } else if (selectVal === "makita") {
      setDiameter(sagblader.makita.diameter);
      setZ(sagblader.makita.z);
      setTurtall(sagblader.makita.rpm);
      setTannlukeAreal(sagblader.makita.areal);
      setSkurHøyde(sagblader.makita.skurhøyde);
      setMatehastighet(sagblader.makita.speed);
      setBladeHeader("Makita");
      setSawBladeImg(
        "https://lh3.googleusercontent.com/pw/AIL4fc93rd4B_tVFpfZQ0PP9C4uHsRfjKnNOytWv58A6v9UH6uhLpmlrRG0eXIcEDwM4BHGbmGklEQEDq4aq7k3YHKva9mMa7VUthIbEPAtpW2fjCF9lEwhIeiXCIreDSQWF10pVbx3mzLt2BF1EGYxz4xgLy4i8dBOY2s_KID_6p6GRbpY8Ci08ls2qtEbSgpNUJ100isK3R86ZN4E5R9rUjmSvEwL7yOrz7NQilyhCEja1jnuk75ZQNatL1Eoopa2HhovnQ0Y4Uf1NDN1QHxDq809f9k7lXxK6Wl94DUd27TTMyjUPclxlzYkW0HbF3pr4BOhNyTcvreGqa7Pyt1RO_iFlaBcG_J_V8414JM3P0Dip_eTQxQxr_RA8IW-scIkpTbNllED8bK-YobOujXVV40557CdOzoy67oXGV5yIUqaPQnMT7Kpl9CklYIqL7g55qXeTC2Ta9vNBjc7uPPrEbbo2sJvxKIut7kqVgE-jg9GHooVCliOa5VzyV_JPRctVjQs8_vf_EnealidDV6FbfaDHjOqt1xeSZw1F6L7ASp8sISD9AGff3U_GCvJ7TYQKgIHdh2Y_-8fLIP-zviVyRZtw57gJWjJO8s_OqOg8k1Xj06wC7eCFmfZEa84Q2apZ97Nh1UYZTXYtpneOiBqHs10Wdu3ny7rB1FLveJf-L1nFX3ux1JlD3f6hCYBBLUnKWedlXpYNeD45kNwLKEyPXc67wVUSua2X-l4Nl6p9k9BL2CYeG6W5WPyMia0xuYuFN98-QPyJi88Jj678cIKV-QtSPXSnMyhcOA4F9QDN6m2Y-JFygSF3i7SkLS1aJkA3GgkgDBk9wNqWPFohgxrOE5zJPmH7xQqzXHtpaWBU0dhW2UrF2I3FEsKyvQddwCDXOryg1Xf7Q-r8yrAnXxptWw=w1000-h987-s-no?authuser=0"
      );
    } else if (selectVal === "DeWalt") {
      setDiameter(sagblader.DeWalt.diameter);
      setZ(sagblader.DeWalt.z);
      setTurtall(sagblader.DeWalt.rpm);
      setTannlukeAreal(sagblader.DeWalt.areal);
      setSkurHøyde(sagblader.DeWalt.skurhøyde);
      setMatehastighet(sagblader.DeWalt.speed);
      setBladeHeader("DeWalt");
      setSawBladeImg(
        "https://lh3.googleusercontent.com/pw/AIL4fc_k0N73CSGDs4KVLIfp4o7gmuPAkpO0DDmU9hA8JnxA1871YzCi0qUUGZdu6LRpqMBpPWqg00lEMbJhV4IBgB8yDTEoOKyDmgu3GtV4guDtyO7fdmnp4NihX5C7jNCA0x1_o6SDYUKU1O3dWmAjZ0cDscfYx71byTX0C8F8pOsXLNWwctct_UjOPCYeLe4Pt_zX9RK_s1y-fZDkSpBRGEySjgfVnwAT0eZvy2glPTndTFxns3tA3PcB2LrkTUc9S7PpO_KZ6JJ4qkJVh5DnJfofxrpurrcx-1C08mwKkItR1xhA9kFM3r8DY81cB51q-c10vnCxyI21Ibfhp4ZezFy57snK_ynUz_nkPP3IKoeVaPfugYqMmXYD6PWsoLKxGhPbXGLFd4HGxoQC0Gd25erkZe3h4bV8hmU4gMg4YPSmkNU3FeOKIMy4Fs3Wr3UZutmKUoXpgQUtOLfu13MKxqb4b_l0ggxF8n2rTNoleHHJbbWEYufyuTzFz8jffltZovLvDm2d6ySLeNQ216bVwRur4hmbFJYoQGuMrhNiDsdzlKptogKGumKYAx-Rr8bnwWc7RsmzDXmHKWb8EpGa47Q1LzvrUxzF3oWcEs5PPcXOocAHc4-0xZ1YZX-rGzL72GjrG8qIKaY3HoG8vfMiO6eGVoKqgaK9At3x2ig6ZqOPQTf67ocR9a6tqDjLFNOoSnp4vzJfLL8zB5sqB_nPS2fbspFzH-Z1bdb8zxgSp8ADuvLx8ozse-WcKGzUPFnYJ0s0wK-mrgexGLLGzQnxU4zQ2tVekmyOt9kMtwWKZy2TdezMInVe6tbCUNfa3GHH_mfgAnDdfniWDHYBXzgxwn42WD4Nq7sq9OYjvbBKxyVclj5Yt2Ia5J2v2mEP-oAiA44_TzIndFaK9nN8pVMGnQ=w465-h468-s-no?authuser=0"
      );
    }
  }, [selectVal]);

  return (
    <>
      <Head>
        <title>Postarkiv</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abel&family=Armata&family=Buda:wght@300&family=Chakra+Petch:ital,wght@0,300;0,400;1,300&family=Electrolize&family=Exo:ital,wght@0,100;0,200;1,100&family=Fira+Code:wght@300;400&family=Fjalla+One&family=Krub:ital,wght@0,200;0,300;1,200&family=Maitree:wght@200;300&family=Mina&family=Nixie+One&family=Orbitron:wght@400;500&family=Poiret+One&family=Red+Hat+Display:ital,wght@0,300;0,400;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;1,100&family=Saira+Condensed:wght@100;200&family=Space+Grotesk:wght@300;400&family=Unica+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <div className="top-container">
          <FormInputComponent
            setSelectVal={setSelectVal}
            diameter={diameter}
            matehastighet={matehastighet}
            turtall={turtall}
            skurHøyde={skurHøyde}
            tannlukeAreal={tannlukeAreal}
            setDiameter={setDiameter}
            setMatehastighet={setMatehastighet}
            setTurtall={setTurtall}
            setSkurHøyde={setSkurHøyde}
            setTannlukeAreal={setTannlukeAreal}
            z={z}
          />

          <div className="fact-box">
            <h4 className="blade-header">{bladeHeader}</h4>
            <p className="facts">Max rpm: {sagblader[selectVal].maxRpm}</p>
            <p className="facts">
              Tannlukeareal: {sagblader[selectVal].areal} mm2
            </p>
            <p className="facts">Antall tenner: {sagblader[selectVal].z}</p>
            <p className="facts">
              Diameter: {sagblader[selectVal].diameter} mm
            </p>
            <p className="facts">Virke: {sagblader[selectVal].virke}</p>
            <p className="facts">
              Brystvinkel: {sagblader[selectVal].brystvinkel} grader
            </p>
          </div>
          <div className="img-container">
            <img className="img" src={sawBladeImg} alt="" />
          </div>
        </div>
        <div className="results-container">
          <div className="info-container">
            {/* <GiSpeedometer
              style={{
                fontSize: "3rem",
                color: "rgb(224, 242, 241)",
                marginBottom: "2rem",
              }}
            /> */}
            <h1 className="info-header">Skjærehastighet</h1>
            <p>{skjærehastighet && skjærehastighet.toFixed(2)}m/s</p>
            {/* <h1 className="text">Diameter: {diameter}</h1>
            <h1 className="text">Turtall: {turtall}</h1> */}
            <h1 className="h1">
              For lavlegert stål vil skjærehastigheten ligge mellom 45-50m/s.
              ved bruk av hardmetallskjær vil hastigheten ligge på ca 60-70 m/s
            </h1>
          </div>
          <div className="info-container">
            {/* <CgArrowsMergeAltH
              style={{
                fontSize: "3rem",
                color: "rgb(224, 242, 241)",
                marginBottom: "2rem",
              }}
            /> */}
            <h1 className="info-header">Tanndeling</h1>
            <p>{((pi * diameter) / z).toFixed(1)}mm</p>
            {/* <h1 className="text">Diameter: {diameter}</h1>
            <h1 className="text">Antall tenner: {z}</h1> */}
            <h1 className="h1">
              Tanndeling er målt fra tannspiss til tannspiss.
            </h1>
          </div>
          <div className="info-container">
            {/* <GiCircularSawblade
              style={{
                fontSize: "3rem",
                color: "rgb(224, 242, 241)",
                marginBottom: "2rem",
              }}
            /> */}
            <h1 className="info-header">Mating per tann</h1>
            <p>{feedTooth}mm per tann</p>

            {/* <h1 className="text">Antall tenner: {z}</h1>
            <h1 className="text">Matehastighet: {matehastighet}</h1>
            <h1 className="text">Turtall: {turtall}</h1> */}
            <h1 className="h1">
              Verdien for tørrskur bør ikke overstige 0.3mm mens verdien på
              råskur bør ligge mellom 0.7 - 1.0mm
            </h1>
          </div>
          <div className="info-container">
            {/* <BiArea
              style={{
                fontSize: "3rem",
                color: "rgb(224, 242, 241)",
                marginBottom: "2rem",
              }}
            /> */}
            <h1 className="info-header">Minimum tannlukeareal</h1>
            <p>{(feedTooth * skurHøyde * 3).toFixed(1)}mm2</p>

            {/* <h1 className="text">Tannluke areal: {tannlukeAreal}</h1>
            <h1 className="text">Mating per tann: {feedTooth}</h1>
            <h1 className="text">Skurhøyde: {skurHøyde}</h1>
            <h1 className="text">Flisafaktor: 3</h1> */}
            <h1 className="h1"></h1>
          </div>
          <div className="info-container">
            {/* <GiWoodBeam
              style={{
                fontSize: "3rem",
                color: "rgb(224, 242, 241)",
                marginBottom: "2rem",
              }}
            /> */}
            <h1 className="info-header">Sponfyllingsgrad(SFG)</h1>
            {/* <h1 className="text">Skurhøyde: {skurHøyde}</h1>
            <h1 className="text">Tannlukeareal: {tannlukeAreal}</h1>
            <h1 className="text">Mating per tann: : {feedTooth}</h1> */}
            <p>{sponfyllingsGrad && sponfyllingsGrad.toFixed(2)} </p>
            {/* <p>{(tannlukeAreal - sponfyllingsGrad).toFixed(2)}mm2 </p> */}
            <h1 className="h1">
              SFG verdien bør ikke overstige 1, har man 1 betyr at man har fyllt
              opp tannluka og hvis man overskrider det så vil flis legge seg
              mellom sagbladet og virket å skape varmgang i tannbunnen. Dette
              kan påvirke strekk og skape ubalanse.
            </h1>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .blade-header {
            font-size: 2rem;
            color: rgb(0, 138, 138);
          }
          .facts {
            color: rgb(0, 138, 138);
            font-size: 1rem;
          }
          .fact-box {
            padding-left: 2rem;
          }
          .results-container {
            margin-top: 1rem;
            display: flex;
            padding: 10px;
            border-radius: 10px;
          }

          .img {
            width: 100%;
          }
          .img-container {
            width: 24rem;
            margin-left: 4rem;
          }
          .info-container {
            padding: 1rem;
            place-items: center;
            width: 14rem;
            border: 1px solid rgb(0, 138, 138);
            margin-right: 1rem;
            border-radius: 10px;
            background: rgb(224, 242, 241);
          }
          .text {
            color: rgb(0, 138, 138);
          }
          label {
            color: rgb(0, 138, 138);
          }
          input {
            margin-bottom: 1rem;
          }
          p {
            color: rgb(0, 138, 138);
            font-size: 1rem;
          }
          .h1 {
            color: rgb(0, 138, 138);
            font-weight: 100;
            font-size: 0.8rem;
            font-style: italic;
          }
          .info-header {
            color: rgb(0, 138, 138);
            font-weight: 100;
            font-size: 1rem;
          }
          .top-container {
            display: flex;
          }
          .img-container {
            width: 30rem;
          }
          .img {
            widht: 100%;
          }
        `}
      </style>
    </>
  );
};

export default SagbladMainPage;
