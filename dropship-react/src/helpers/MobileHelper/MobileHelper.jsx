import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setIsMobile } from "../../store/slices/mobile/mobileSlice"
import { setIsSettingsOn } from "../../store/slices/nav/navSettingsSlice"
import { setIsDDOn, setIsScrollOn } from "../../store/slices/dropdowns/ddBkgSlice"
import { setMobileFiltersOn } from '../../store/slices/filters/filtersSlice'

import { applyNoScroll, applyScroll } from '../ScrollHelper/scrollFunctions'

export function useMobileWidthEffects() {
    const dispatch = useDispatch();
    const isMobile = useSelector((state) => state.mobile.isMobile)
    const isSettingsOn = useSelector((state) => state.navSettings.isSettingsOn)
    const showCatDropDown = useSelector((state) => state.catDropDown.showDropDown)
    const isDDOn = useSelector((state) => state.ddBkg.isDDOn)
    const allowScroll = useSelector((state) => state.ddBkg.isScrollOn)
    const mobileFiltersOn = useSelector((state) => state.filters.mobileFiltersOn)
    const showAccDropDown = useSelector((state) => state.acDropDown.showAccDropDown)
    const showLoading = useSelector(state => state.loader.showLoading)
    const finalPayment = useSelector((state) => state.cart.finalPayment)

    useEffect(() => {
        if (isMobile) {
            if (isSettingsOn || showCatDropDown) {
                dispatch(setIsDDOn(true))
                dispatch(setIsScrollOn(true))
            } else if (mobileFiltersOn || showAccDropDown) {
                dispatch(setIsScrollOn(true))
            }
            else {
                dispatch(setIsDDOn(false))
                dispatch(setIsScrollOn(false))
            }
        } else if (!isMobile && (showAccDropDown || finalPayment)) {
            dispatch(setIsScrollOn(true))
        } else if (!isMobile && (!showAccDropDown || !finalPayment)) {
            dispatch(setIsScrollOn(false))
        }
        if (showLoading) {
            dispatch(setIsScrollOn(true))
        } else if (!showLoading && (!showCatDropDown && !showAccDropDown && !mobileFiltersOn && !isSettingsOn) && isMobile) { // might need to redo
            dispatch(setIsScrollOn(false))
        }
    }, [dispatch, isMobile, isSettingsOn, showCatDropDown, mobileFiltersOn, showAccDropDown, showLoading, finalPayment]) // Drop Downs and Pop-Ups checker UseEffect

    useEffect(() => {
        if (allowScroll) {
            applyNoScroll()
        } else {
            applyScroll()
        }
    }, [allowScroll]) // Body Scroll setter UseEffect

    useEffect(() => {
        dispatch(setIsMobile(window.innerWidth <= 800))
    }, [dispatch]) // Mobile Width setter UseEffect

    useEffect(() => {
        const updateIsMobile = () => {
            dispatch(setIsMobile(window.innerWidth <= 800))
            if (window.innerWidth <= 800 && !isMobile) {
                closeSettings()
            } else if (window.innerWidth >= 800 && isMobile) {
                closeSettings()
            }
        }

        const closeSettings = () => {
            if (isSettingsOn) dispatch(setIsSettingsOn(false))
            if (isDDOn) dispatch(setIsDDOn(false))
            if (allowScroll) dispatch(setIsScrollOn(false))
            if (mobileFiltersOn) dispatch(setMobileFiltersOn(false))
        }

        window.addEventListener('resize', updateIsMobile)

        return () => {
            window.removeEventListener('resize', updateIsMobile)
        }
    }, [dispatch, isMobile, isSettingsOn, isDDOn, allowScroll, mobileFiltersOn]) // Mobile Width checker UseEffect
}
