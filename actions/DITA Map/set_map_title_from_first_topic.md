#### ID
set_map_title_from_first_topic

#### Name
Set Map Title From 1st Topic

#### Description

Set the @title attribute of the map from the first topic.<br>
Topic and ditamap must be in the same folder.

####  XPath
/map/topicref[1]/@href[not(contains(., '..'))]

#### Operation
XSLTOperation

#### Arguments
<dl>
    <dt>sourceLocation</dt>
    <dd>N/A</dd>
    <dt>targetLocation</dt>
    <dd>N/A</dd>
    <dt>script</dt>
</dl>

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0"
    xmlns:ditaarch="http://dita.oasis-open.org/architecture/2005/">

    <xsl:variable name="Concept" select="document(/map/topicref[1]/@href)"/>
    <xsl:variable name="lookupDoc" select="$Concept/*/title"/>

    <!-- store result set -->
    <xsl:variable name="FirstPass">
        <xsl:copy-of select="$lookupDoc" copy-namespaces="no"/>
    </xsl:variable>

    <!-- fetch title from result set (class ignored)-->
    <xsl:template name="TitleFromConcept" match="//map/title">
        <xsl:apply-templates select="$FirstPass"/>
    </xsl:template>

    <!-- IdentityTransform -->
    <xsl:template match="/ | @* | node()">
        <xsl:copy copy-namespaces="no">
            <xsl:apply-templates select="@* | node()"/>
        </xsl:copy>
    </xsl:template>

    <!-- Ignores -->
    <xsl:template name="ignores" match="@class | @ditaarch | @ditaarch:DITAArchVersion | @domains"/>

</xsl:stylesheet>

```
<dl>