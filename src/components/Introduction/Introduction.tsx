import { BannerContainer, BannerImg, Container, ContentContainer, Span, StatisticContainer, StatisticItem, StatisticName, StatisticValue, TextContent, Title } from "./Introduction.styles"

export const Introduction = () => {
    return (
        <Container>
            <BannerContainer>
                <BannerImg  src={`${process.env.PUBLIC_URL}/assets/images/image-header-mobile.jpg`} alt="Banner image" />
            </BannerContainer>

            <ContentContainer>
                <Title>Get <Span>insights</Span> that help your business grow.</Title>

                <TextContent>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</TextContent>

                <StatisticContainer>
                    <StatisticItem>
                        <StatisticValue>10k +</StatisticValue>
                        <StatisticName>COMPANIES</StatisticName>
                    </StatisticItem>
                    <StatisticItem>
                        <StatisticValue>314</StatisticValue>
                        <StatisticName>TEMPLATES</StatisticName>
                    </StatisticItem>
                    <StatisticItem>
                        <StatisticValue>12M+</StatisticValue>
                        <StatisticName>QUERIES</StatisticName>
                    </StatisticItem>
                </StatisticContainer>
            </ContentContainer>
        </Container>
    )
}