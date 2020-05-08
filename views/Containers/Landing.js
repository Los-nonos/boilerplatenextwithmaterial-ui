import React, { Component } from "react";
import Router from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function Index() {
    const { t, lang } = useTranslation();
    const title = t('common:title');
    return (
        <>
            <p>{title}</p>
        </>
    );
}