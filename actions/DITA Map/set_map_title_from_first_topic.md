#### ID
set.map.title.from.first.topic

#### Name
Set Map Title From First Topic

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
    xmlns:ditaarch="http://dita.oasis-open.org/architecture/2005/"
    exclude-result-prefixes="#all">
    
    <!-- IdentityTransform -->
    <xsl:template match="@*|node()">
        <xsl:copy copy-namespaces="no">
            <xsl:apply-templates select="@*|node()"/>
        </xsl:copy>
    </xsl:template>
    
    <!-- fetch title from result set -->
    <xsl:template match="//title/text()">
        <xsl:value-of select="document(/map/topicref[1]/@href)//title/text()"/>    
    </xsl:template>
    
    <!-- in place of -expand:off
        http://www.saxonica.com/documentation9.5/using-xsl/commandline.html -->
    <xsl:template match="@class | @ditaarch | @ditaarch:DITAArchVersion | @domains "/>
    
</xsl:stylesheet>

```
<dl>